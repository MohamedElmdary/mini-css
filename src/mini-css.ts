import { Token } from "./mini-css.interfaces";
import { getProps } from "./min-css.helpers";

class MiniCss {
  private $$css: string;
  private $$blocks: string[];
  private $$tokens: Token[];

  constructor(css: string) {
    this.$$css = css;
    this.$$blocks = this.split();
    this.$$tokens = this.tokenizer();
  }

  public static compile(css: string): string {
    const mc = new MiniCss(css);
    return "";
  }

  private split(): string[] {
    const blocks: string[] = [];
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

  private tokenizer(): Token[] {
    return this.$$blocks.map(b => {
      const block = b.trim();
      const lParIndex = block.indexOf("{");
      const selector = block.slice(0, lParIndex).trim();
      const rParIndex = block.indexOf("}");
      const props = getProps(block, lParIndex, rParIndex);
      return { selector, props };
    });
  }
}
