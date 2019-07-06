class MiniCss {
  private _tokens: [] = [];

  constructor(private css: string) {}

  public static compile(css: string): string {
    const miniCss: MiniCss = new MiniCss(css);
    miniCss;
    return "";
  }

  get tokens() {
    return this._tokens;
  }

  /*
  public split() {}

  public tokenizer() {}

  public combine() {}

  public minify() {}

  public generateCss() {}
*/
}
