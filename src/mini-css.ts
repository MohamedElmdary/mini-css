import { Token, CombinedToken } from "./mini-css.interfaces";
import {
  getProps,
  getSelector,
  filterCominedToken,
  isMatch
} from "./min-css.helpers";

export class MiniCss {
  private $$css: string;
  private $$blocks: Array<string>;
  private $$tokens: Array<Token>;
  private $$tokensAfterCombine: Array<Token | CombinedToken>;
  private $$tokensAfterMinify: Array<Token | CombinedToken>;

  constructor(css: string) {
    this.$$css = css;
    this.$$blocks = this.split();
    this.$$tokens = this.tokenizer();
    this.$$tokensAfterCombine = this.combine();
    this.$$tokensAfterMinify = this.minify();
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

  private combine(): Array<Token | CombinedToken> {
    // deep copy tokens to prevent any edits
    let tokens: Token[] = this.$$tokens.map(token => {
      const { selector, props } = token;
      return { selector, props: [...props] };
    });

    const result: Array<Token | CombinedToken> = [];

    for (let a = 0, max = tokens.length; a < max; a++) {
      const currentToken = tokens[a];
      currentToken.props = filterCominedToken(
        currentToken,
        a,
        max,
        tokens,
        result
      );
    }
    tokens = tokens.filter(token => !!token.props.length);
    return [...result, ...tokens];
  }

  private minify(): Array<Token | CombinedToken> {
    // deep copy tokens
    let tokens: Array<Token | CombinedToken> = this.$$tokensAfterCombine.map(
      token => {
        if ("selector" in token) {
          return {
            selector: token.selector,
            props: token.props.map(prop => ({ ...prop }))
          } as Token;
        } else {
          return {
            selectors: token.selectors,
            props: token.props.map(prop => ({ ...prop }))
          } as CombinedToken;
        }
      }
    );

    for (let a = 0, max = tokens.length; a < max; a++) {
      const currentToken = tokens[a];
      if ("selector" in currentToken) {
        continue;
      }
      const currentRemove = currentToken.remove;
      if (currentRemove) {
        continue;
      }

      const currentSelectors = currentToken.selectors;
      const cuurentProps = currentToken.props;

      for (let b = a + 1; b < max; b++) {
        const innerToken = tokens[b];
        if ("selector" in innerToken) {
          continue;
        }

        const innerRemove = innerToken.remove;
        if (innerRemove) {
          continue;
        }

        const innerSelectors = innerToken.selectors;
        const innerProps = innerToken.props;

        if (isMatch(currentSelectors, innerSelectors)) {
          innerToken.remove = true;
          cuurentProps.push(...innerProps);
        }
      }
    }
    tokens = tokens.filter(token => !(token as any)["remove"]);
    console.log(JSON.stringify(tokens, undefined, 2));
    return tokens;
  }
}

MiniCss.compile(`
  body {
    color: blue;
    font-weight: 400;
  }
  .test {
    color: blue;
    font-weight: 400;
  }
  body::after {
    font-weight: bold;
  }
`);
