import { createGlobalStyle } from "styled-components";
import { DarkTheme, LightTheme } from "./Theme";

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video,button {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
html {
  scroll-behavior: smooth;
  overflow-x: hidden;
}
body {
  overflow-x: hidden;
}
body, button {
	font-family: 'Inter', sans-serif;
	line-height: 1.5;
    background-color: ${(props) =>
    props.theme === true ? DarkTheme.bg : LightTheme.bg};
    color: ${(props) => (props.theme === true ? DarkTheme.fg : LightTheme.fg)};
    transition: background-color 0.3s ease, color 0.3s ease;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
/* Hide the scroll bar for the container */
  /* Chrome, Edge, and Safari */
  *::-webkit-scrollbar {
    width: 6px;
  }

  *::-webkit-scrollbar-track {
    background: ${(props) =>
    props.theme === true ? DarkTheme.bg : LightTheme.bg};
  }

  *::-webkit-scrollbar-thumb {
    background-color: ${(props) =>
    props.theme === true ? DarkTheme.detailBg : LightTheme.detailBg};
    border-radius: 6px;
  }
`;
export default GlobalStyle;
