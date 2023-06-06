import { createGlobalStyle } from "styled-components";
import { DarkTheme, LightTheme } from "./Theme";
<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
</style>;

const GlobalStyle = createGlobalStyle`
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
time, mark, audio, video {
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
body {
	font-family: 'Roboto', sans-serif;
	line-height: 1;
    background-color: ${(props) =>
      props.theme === true ? DarkTheme.bg : LightTheme.bg};
    color: ${(props) => (props.theme === true ? DarkTheme.fg : LightTheme.fg)};
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
    width: 9px;
  }

  *::-webkit-scrollbar-track {
    background: ${(props) =>
      props.theme === true ? DarkTheme.detailBg : LightTheme.detailBg};
  }

  *::-webkit-scrollbar-thumb {
    background-color: ${(props) =>
      props.theme === true ? DarkTheme.bg : LightTheme.bg};
    border-radius: 9px;
    border: 1px none #ffffff;
  }
`;
export default GlobalStyle;
