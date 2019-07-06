import { MiniCss } from "../src/mini-css";

// issue to fix
const css = `
@import url("https://fonts.googleapis.com/css?family=Lato:100,300,400,700,900&display=swap");

body {
	font-family: Lato
}

br {
	font-family: Lato
}

.test, .dog {
	font-family: Lato
}

div {
	background-color: blue;
}

section {
	background-color: blue;
}

span {
	background-color: blue
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
