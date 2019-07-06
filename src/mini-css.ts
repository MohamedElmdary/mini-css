import { Token, CombinedCSS } from "./mini-css.interfaces";
import { getProps, getSelector } from "./min-css.helpers";

export class MiniCss {
  private $$css: string;
  private $$blocks: Array<string>;
  private $$tokens: Array<Token>;
  private $$tokensAfterCombine: Array<Token | CombinedCSS>;

  constructor(css: string) {
    this.$$css = css;
    this.$$blocks = this.split();
    this.$$tokens = this.tokenizer();
    this.$$tokensAfterCombine = this.combine();
  }

  public static compile(css: string): string {
    const mc = new MiniCss(css);
    return "";
  }

  private split(): Array<string> {
    const blocks: Array<string> = [];
    let current = 0;
    for (;;) {
      const n = this.$$css.indexOf("}", current);
      if (n === -1) break;
      const block = this.$$css.slice(current, n + 1);
      blocks.push(block);
      current = n + 1;
    }
    this.$$blocks = blocks;
    return blocks;
  }

  private tokenizer(): Array<Token> {
    return this.$$blocks.map(b => {
      const block = b.trim();
      const lParIndex = block.indexOf("{");
      const selector = getSelector(block, lParIndex);
      const rParIndex = block.indexOf("}");
      const props = getProps(block, lParIndex, rParIndex);
      return { selector, props };
    });
  }

  private combine(): Array<Token | CombinedCSS> {
    // deep copy tokens to prevent any edits
    let tokens: Token[] = this.$$tokens.map(token => {
      const { selector, props } = token;
      return { selector, props: [...props] };
    });

    const result: Array<Token | CombinedCSS> = [];

    for (let a = 0, max = tokens.length; a < max; a++) {
      const currentToken = tokens[a];
      currentToken.props = currentToken.props.filter(currentProp => {
        let notExist = true;

        for (let b = a + 1; b < max; b++) {
          const innerToken = tokens[b];

          innerToken.props = innerToken.props.filter(innerProp => {
            if (
              innerProp.name === currentProp.name &&
              innerProp.value === currentProp.value
            ) {
              notExist = false;
              result.push({
                selectors: [currentToken.selector, innerToken.selector],
                prop: {
                  name: innerProp.name,
                  value: innerProp.value
                }
              });
              return false;
            }
            return true;
          });
        }
        return notExist;
      });
    }
    tokens = tokens.filter(token => !!token.props.length);
    console.log(JSON.stringify([...result, ...tokens], undefined, 2));
    return [...result, ...tokens];
  }
}
