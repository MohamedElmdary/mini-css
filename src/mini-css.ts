class MiniCss {
  private $$css: string;

  constructor(css: string) {
    this.$$css = css;
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
    return blocks;
  }
}
