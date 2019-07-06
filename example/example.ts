import { MiniCss } from "../src/mini-css";

// issue to fix
const css = `
@import url("https://fonts.googleapis.com/css?family=Lato:100,300,400,700,900&display=swap");

*,
*::after,
*::before {
  padding: 0;
  margin: 0;
  box-sizing: inherit;
}

body {
  box-sizing: border-box;
  font-weight: 400;
  font-family: "Lato", sans-serif;
  line-height: 1.7;
  overflow-x: hidden;
  color: #333;
}

.form-task {
  position: relative;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.form-background-container {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  min-height: 100vh;
  width: 100%;
  overflow: hidden;
}

.form-background {
  /* background-image: url(https://images.pexels.com/photos/747964/pexels-photo-747964.jpeg?cs=srgb&dl=background-calm-clouds-747964.jpg&fm=jpg); */
  background-image: url(https://images.pexels.com/photos/1567069/pexels-photo-1567069.jpeg?cs=srgb&dl=adult-astronomy-astrophotography-1567069.jpg&fm=jpg);
  background-size: cover;
  /* here add calc function to show it's usage */
  min-height: calc(100% + 50px);
  width: calc(100% + 50px);
  margin-top: -25px;
  margin-left: -25px;
  /* filter algorithm has about 5px brightness so container should be abit bigger and removed (using overflow) */
  filter: blur(10px);
}

.form-container {
  margin: 25px 0;
  width: 60%;
  border-radius: 10px;
  overflow: hidden;
}

.form-container::after {
  content: "";
  display: table;
  clear: both;
}

.form-container > div {
  float: left;
  width: 40%;
  height: 450px;
}

.form-container > div:first-of-type {
  /* background-image: url(https://images.pexels.com/photos/747964/pexels-photo-747964.jpeg?cs=srgb&dl=background-calm-clouds-747964.jpg&fm=jpg); */
  background-image: url(https://images.pexels.com/photos/1567069/pexels-photo-1567069.jpeg?cs=srgb&dl=adult-astronomy-astrophotography-1567069.jpg&fm=jpg);
  background-size: cover;
  background-position: center bottom;
  /* filter: hue-rotate(-90deg); */
  /* filter: brightness(0.9); */
  color: white;
}

.form-container > div:first-of-type .cover {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
  padding-left: 50px;
  padding-top: 50px;
}

.form-container > div:first-of-type h2 {
  font-weight: 300;
  font-size: 40px;
}

.form-container > div:first-of-type p {
  width: 70%;
  font-weight: 300;
  line-height: 1.4;
}

.form-container > div:first-of-type .cover div {
  margin-top: 70%;
}

.form-container > div:first-of-type .cover div p {
  border: 2px solid #fff;
  padding: 1px 5px;
  width: auto;
  display: inline-block;
  font-size: 13px;
  font-weight: 700;
}

.form-container > div:last-of-type {
  width: 60%;
  background-color: white;
  position: relative;
}

.form-container > div:last-of-type > div {
  padding: 30px 50px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
}

.form-container > div:last-of-type h2 {
  display: none;
  font-weight: 300;
  font-size: 40px;
}

.form-container > div:last-of-type .form-control {
  position: relative;
  margin: 25px 0;
}

.form-container > div:last-of-type .form-control input {
  border: none;
  background: none;
  width: 100%;
  display: block;
  padding: 10px 0;
  outline: none;
}

.form-container > div:last-of-type .form-control input::placeholder {
  color: #aaa;
}

.form-container > div:last-of-type .form-control label {
  position: absolute;
  opacity: 1;
  top: -10px;
  visibility: visible;
  left: 0;
  color: #777;
  letter-spacing: 1px;
  font-size: 10px;
  transition: 0.35s;
}

.form-container
  > div:last-of-type
  .form-control
  input:placeholder-shown
  + label {
  top: 6px;
  visibility: hidden;
  opacity: 0;
}

.form-container > div:last-of-type .form-control span {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background: #e6e5e5;
}

.form-container > div:last-of-type .form-control input:focus ~ span {
  background: #bbb;
}

.form-container > div:last-of-type button {
  backface-visibility: hidden;
  outline: none;
  display: block;
  color: #fff;
  font-weight: 700;
  border: none;
  border-radius: 5px;
  width: 100%;
  background-color: #8473c3;
  font-size: 17px;
  cursor: pointer;
  padding: 15px 0;
  margin: 40px 0 15px;
  position: relative;
  z-index: 2;
}

.form-container > div:last-of-type button::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: #8473c3;
  z-index: -1;
  border-radius: 5px;
  transition: 0.35s;
}

.form-container > div:last-of-type button:hover::after {
  opacity: 0;
  visibility: hidden;
  top: -20px;
  left: -20px;
  height: calc(100% + 40px);
  width: calc(100% + 40px);
}

.form-container > div:last-of-type form + p {
  text-align: center;
  color: #aaa;
}

.form-container > div:last-of-type form + p a:link {
  text-decoration: none;
  color: #8473c3;
  font-weight: 700;
  height: 25px;
  display: inline-block;
  padding: 0;
  border-bottom: 1px solid #8473c3;
  transition: 0.2s;
}

.form-container > div:last-of-type form + p a:hover,
.form-container > div:last-of-type form + p a:active,
.form-container > div:last-of-type form + p a:focus,
.form-container > div:last-of-type form + p a:visited {
  height: 28px;
}

/* 
    breakpoints
    xl: 1200
    lg: 991
    md: 768
    sm: 576
    xs: --
*/

@media (max-width: 1200px) {
  .form-container {
    width: 70%;
  }
}

@media (max-width: 991px) {
  .form-container {
    width: 85%;
  }
}

@media (max-width: 768px) {
  .form-container > div:last-of-type h2 {
    display: block;
  }

  .form-container {
    width: 83%;
  }
  .form-container > div {
    float: none;
  }
  .form-container > div:first-of-type {
    display: none;
  }
  .form-container > div:last-of-type {
    width: 100%;
  }
}

@media (max-width: 576px) {
  .form-container {
    width: calc(100% - 30px);
  }
}

@media (max-width: 400px) {
  .form-container > div:last-of-type h2 {
    font-size: 30px;
  }

  .form-container > div:last-of-type > div {
    padding: 15px;
  }
}

`;

console.log(MiniCss.compile(css));

// MiniCss.compile(css);

/* 
// Output

    @import url("https://fonts.googleapis.com/css?family=Lato:100,300,400,700,900&display=swap");body,br,.test, .dog{font-family:Lato}div,section,span{background-color:blue}
 */
