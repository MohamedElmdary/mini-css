import expect from "expect";
import { MiniCss, CombinedToken, Token } from "../src";

describe("Mini Css Tests", () => {
  describe("static compile method [simple e.g]", () => {
    const css = `
      div {
        color: blue;
      }
      span {
        color: blue;
      }
    `;

    const mc = MiniCss.compile(css);
    it("should be equal", () => {
      expect(mc).toEqual("div,span{color:blue}");
    });
  });

  describe("Class [simple e.g]", () => {
    const css = `
      div {
        -webkit-transform: rotate(90deg);
      }
      span {
        -webkit-transform: rotate(90deg);
      }
    `;

    const mc = new MiniCss(css);

    it("code", () => {
      expect(mc.code).toEqual(css);
    });

    it("imports", () => {
      expect(mc.imports).toEqual([]);
    });

    it("keyframes", () => {
      expect(mc.keyframes).toEqual([]);
    });
    it("medias", () => {
      expect(mc.medias).toEqual([]);
    });

    it("combined tokens", () => {
      const cTs = [
        {
          selectors: ["div", "span"],
          props: [{ name: "-webkit-transform", value: "rotate(90deg)" }]
        } as CombinedToken
      ];
      expect(mc.combinedTokens).toEqual(cTs);
    });

    it("tokens", () => {
      const ts = [
        {
          selector: "div",
          props: [{ name: "-webkit-transform", value: "rotate(90deg)" }]
        },
        {
          selector: "span",
          props: [{ name: "-webkit-transform", value: "rotate(90deg)" }]
        }
      ] as Token[];
      expect(mc.tokens).toEqual(ts);
    });

    it("generated code", () => {
      const gC = "div,span{-webkit-transform:rotate(90deg)}";
      expect(mc.generatedCSS).toEqual(gC);
    });
  });

  describe("static compile method [advanced e.g]", () => {
    const imports = ["@import(anything);", "@import(ontherThing);"];
    const keyframes = [
      "@keyframes test {color: blue}",
      "@-moz-keyframes key {background-color: blue}"
    ];
    const medias = ["@media (max-width: 779px){.test{color:blue}}"];
    const code = `
      body {
        font-weight: 400;
        color: #333;
      }
      .test > span + input:checked ~ label[for="input"] {
        color: #333;
      }
    `;
    const css =
      imports.join("\n") + code + keyframes.join("\n") + medias.join("\n");
    const expected =
      imports.join("") +
      'body,.test > span + input:checked ~ label[for="input"]{color:#333}body{font-weight:400}' +
      medias.join("") +
      keyframes.join("");

    it("should be equal", () => {
      expect(MiniCss.compile(css)).toEqual(expected);
    });
  });

  describe("class [advanced e.g]", () => {
    const imports = ["@import(anything);", "@import(ontherThing);"];
    const keyframes = [
      "@keyframes test {color: blue}",
      "@-moz-keyframes key {    background-color: blue}"
    ];
    const medias = ["@media (max-width: 779px){.test{color:blue}}"];
    const code = `
      body {
        font-weight: 400;
        color: #333;
      }
      .test > span + input:checked ~ label[for="input"] {
        color: #333;
      }
    `;
    const css =
      imports.join("\n") + code + keyframes.join("\n") + medias.join("\n");
    const expected =
      imports.join("") +
      'body,.test > span + input:checked ~ label[for="input"]{color:#333}body{font-weight:400}' +
      medias.join("") +
      keyframes.join("");

    const mc = new MiniCss(css);

    it("code", () => {
      expect(mc.code).toEqual(css);
    });

    it("imports", () => {
      expect(mc.imports).toEqual(imports);
    });

    it("keyframes", () => {
      expect(mc.keyframes).toEqual(keyframes);
    });

    it("medias", () => {
      expect(mc.medias).toEqual(medias);
    });

    it("combined tokens", () => {
      const cTs = [
        {
          selectors: [
            "body",
            '.test > span + input:checked ~ label[for="input"]'
          ],
          props: [{ name: "color", value: "#333" }]
        } as CombinedToken
      ];
      expect(mc.combinedTokens).toEqual(cTs);
    });

    it("tokens", () => {
      const ts = [
        {
          selector: "body",
          props: [
            { name: "font-weight", value: "400" },
            { name: "color", value: "#333" }
          ]
        },
        {
          selector: '.test > span + input:checked ~ label[for="input"]',
          props: [{ name: "color", value: "#333" }]
        }
      ] as Token[];
      expect(mc.tokens).toEqual(ts);
    });

    it("generated code", () => {
      expect(mc.generatedCSS).toEqual(expected);
    });
  });
});
