import { Token, CombinedToken } from "./mini-css.interfaces";
import {
  getProps,
  getSelector,
  filterCominedToken,
  isMatch,
  generatePropsCode,
  logger
} from "./min-css.helpers";

export class MiniCss {
  private $$code: string;
  private $$imports: string[] = [];
  private $$medias: string[] = [];
  private $$keyframes: string[] = [];
  private $$changes: CombinedToken[] = [];
  private $$noImports: string;
  private $$noMedias: string;
  private $$noKeyFrames: string;
  private $$css: string;
  private $$blocks: Array<string>;
  private $$tokens: Array<Token>;
  private $$tokensAfterCombine: Array<Token | CombinedToken>;
  private $$tokensAfterMinify: Array<Token | CombinedToken>;
  private $$generatedCSS: string;

  constructor(css: string, info: boolean = true) {
    this.$$code = css;
    logger(info, "removing @import statements...");
    this.$$noImports = this.removeImports();
    logger(info, "removing @media statements...");
    this.$$noMedias = this.removeMedias();
    logger(info, "removing @keyframes statements...");
    this.$$noKeyFrames = this.removeKeyFrames();
    logger(info, "removing comments...");
    this.$$css = this.removeComments();
    logger(info, "spliting code into blocks...");
    this.$$blocks = this.split();
    logger(info, "generating tokens...");
    this.$$tokens = this.tokenizer();
    logger(info, "combine tokens...");
    this.$$tokensAfterCombine = this.combine();
    logger(info, "minify combined tokens...");
    this.$$tokensAfterMinify = this.minify();
    logger(info, "generating code!!");
    this.$$generatedCSS = this.generateCode();
    logger(
      info,
      "/*===================================*/\nThanks for using mini-css\ncreator: Mohamed Rabie Rabie Elmdary\nGithub: https://github.com/MohamedElmdary",
      "\x1b[33m%s\x1b[0m"
    );
  }

  public static compile(css: string, info: boolean = true): string {
    const mc = new MiniCss(css, info);
    return mc.$$generatedCSS;
  }

  private removeImports(): string {
    const code = this.$$code.replace(/@import.*;/gi, imp => {
      this.$$imports.push(imp.trim());
      return "";
    });
    return code;
  }

  private removeMedias(): string {
    let code = this.$$noImports;
    for (;;) {
      let current = code.indexOf("@media");
      if (current === -1) {
        break;
      }
      let start = current;
      current += 6;
      let openCurl = 0;
      let value = "@media";
      for (;;) {
        const c = code[current];
        if (c === "{") {
          openCurl += 1;
          value += c;
        } else if (c === "}") {
          value += c;
          if (openCurl === 1) {
            break;
          } else {
            openCurl -= 1;
          }
        } else {
          value += c;
        }
        current++;
      }
      this.$$medias.push(value);
      code = code.slice(0, start) + code.slice(current);
    }
    this.$$medias = this.$$medias
      .map(this.removeComments)
      .map(this.minifyMedia);
    return code;
  }

  private removeKeyFrames(): string {
    let code = this.$$noMedias;
    const framesPoints: string[] = [];
    code.replace(/@(-\w+-)?keyframes\s+\w+(\s+)?{/gi, point => {
      framesPoints.push(point.slice(0, point.length - 1));
      return point;
    });
    for (let i = 0, max = framesPoints.length; i < max; i++) {
      const frame = framesPoints[i];
      let current = code.indexOf(frame);
      let openCurl = 0;
      let value = "";
      for (;;) {
        let c = code[current];
        if (c === "{") {
          openCurl++;
          value += c;
        } else if (c === "}") {
          value += c;
          if (openCurl === 1) {
            break;
          } else {
            openCurl--;
          }
        } else {
          value += c;
        }
        current++;
      }
      framesPoints[i] = value;
    }
    for (let point of framesPoints) {
      code = code.replace(point, "");
    }
    this.$$keyframes = framesPoints.map(a => a.replace(/\n/gi, ""));
    return code;
  }

  private minifyMedia(media: string): string {
    const firstLeftPra = media.indexOf("{");
    const mediaCode = media.slice(0, firstLeftPra);
    const code = media.slice(firstLeftPra + 1, media.length - 1);
    const mc = MiniCss.compile(code, false);
    return mediaCode + "{" + mc + "}";
  }

  private removeComments(code?: string): string {
    if (!code) {
      return this.removeComments(this.$$noKeyFrames);
    }
    return code.replace(/\/\*[^*]*\*+([^/*][^*]*\*+)*\//gi, "").trim();
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
    return this.$$blocks
      .map(b => {
        const block = b.trim();
        const lParIndex = block.indexOf("{");
        const selector = getSelector(block, lParIndex);
        const rParIndex = block.indexOf("}");
        const props = getProps(block, lParIndex, rParIndex);
        return { selector, props };
      })
      .filter(a => !!(a.selector && a.props.length));
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
    this.$$changes = result.filter(
      token => "selectors" in token
    ) as CombinedToken[];
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
    return tokens;
  }

  private generateCode(): string {
    let result = "";
    this.$$tokensAfterMinify.forEach(token => {
      if ("selector" in token) {
        result += `${token.selector
          .split(",")
          .map(a => a.trim())
          .join(",")}{${generatePropsCode(token)}}`;
      } else {
        result += `${token.selectors
          .join(",")
          .split(",")
          .map(a => a.trim())
          .join(",")}{${generatePropsCode(token)}}`;
      }
    });
    return (
      this.$$imports.join("") +
      result +
      this.$$medias.join("") +
      this.$$keyframes.join("")
    );
  }

  /* getters */
  get code(): string {
    return this.$$code;
  }

  get imports(): string[] {
    return this.$$imports;
  }

  get medias(): string[] {
    return this.$$medias;
  }

  get keyframes(): string[] {
    return this.$$keyframes;
  }

  get combinedTokens(): CombinedToken[] {
    return this.$$changes;
  }

  get tokens(): Token[] {
    return this.$$tokens;
  }

  get tokensAfterCombine(): Array<Token | CombinedToken> {
    return this.$$tokensAfterCombine;
  }

  get minfiedTokensAfterCombine(): Array<Token | CombinedToken> {
    return this.$$tokensAfterMinify;
  }

  get generatedCSS(): string {
    return this.$$generatedCSS;
  }
}
