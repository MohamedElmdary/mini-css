import { MiniCss } from "../src/mini-css";

const css = `
    /* comment 1 */
    @import url("https://fonts.googleapis.com/css?family=Lato:100,300,400,700,900&display=swap");

    body {
        font-weight: 400;
        color: /* comment 2 */ #333;
    }

    .test {
        // comment 3
        font-weight: 400;
    }
`;

console.log(MiniCss.compile(css));

/* 
// Output

    @import url("https://fonts.googleapis.com/css?family=Lato:100,300,400,700,900&display=swap");
    body,
    .test {
        font-weight: 400
    }

    body {
        color: #333
    }
 */
