import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
:root {
  ---body-font: 'Plus Jakarta Sans', sans-serif;
  --first-color: #635FC7;
  --first-color-alt: #A8A43c;
  --secund-color: #20212C;
  --gray-color: #2B2C37;
  --gray-color-alt:#828FA3;
  --body-color: #000112;
  --text-color: #fff;
  --border-color: rgb(62 63 78 / 1);


    /* .5rem = 8px, 1rem = 16px, 1.5rem = 24px ... */
    --big-font-size: 2rem;
    --h1-font-size: 1.5rem;
    --h2-font-size: 1.25rem;
    --h3-font-size: 1.125rem;
    --normal-font-size: .938rem;
    --small-font-size: .813rem;
    --smaller-font-size: .75rem;

    /*========== Font weight ==========*/
    --font-medium: 500;
    --font-semi-bold: 600;
     /*========== z index ==========*/
    --z-tooltip: 10;
    --z-fixed: 100;
    --z-modal: 1000;


}
@media screen and (min-width: 968px) {
  :root {
    --big-font-size: 3rem;
    --h1-font-size: 2.25rem;
    --h2-font-size: 1.5rem;
    --h3-font-size: 1.25rem;
    --normal-font-size: 1rem;
    --small-font-size: .875rem;
    --smaller-font-size: .813rem;
  }
}
html,
body {
  padding: 0;
  margin: 0;
  line-height: 1.6;
  font-family:  var(---body-font);
  color: var(--text-color);
  font-size: var(--normal-font-size);
}
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
   background: none;
    border: none;
    outline: none;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0 0 var(--header-height) 0;
  font-family: var(--body-font);
  font-size: var(--normal-font-size);
  background-color: var(--body-color);
  color: var(--text-color);
}

h1, h2, h3, h4 {
  color: var(--title-color);
  font-weight: var(--font-semi-bold);
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
}

img {
  max-width: 100%;
  height: auto;
}
`;
