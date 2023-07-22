import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    scroll-behavior: smooth;
    margin: 0;
    max-width: 100vw;
    overflow-x: hidden;
    font-size: var(--normal-font-size);
    background-color: var(--body-color);
    color: var(--text-color);
  }


  a {
    color: inherit;
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  :root {
    --header-height: 3rem;
    /* Colores */

    /* Matiz */
  --hue-color: 250; /* Purple 250 - Green 142 - Blue 230 - Pink 340  */

    /* Color Mode  */
    --first-color: hsl(var(--hue-color), 69%, 61%);
    --first-color-second: hsl(var(--hue-color), 69%, 61%);
    --first-color-alt: hsl(var(--hue-color), 57%, 53%);
    --first-color-lighter: hsl(var(--hue-color), 92%, 85%);
    --title-color: hsl(var(--hue-color), 8%, 15%);
    --text-color: hsl(var(--hue-color), 8%, 45%);
    --text-color-light: hsl(var(--hue-color), 8%, 65%);
    --input-color: hsl(var(--hue-color), 70%, 96%);
    --body-color: hsl(var(--hue-color), 60%, 99%);
    --container-color: #FFF;

    /* Font y Typography */

    --big-font-size: 2rem;
    --h1-font-size: 1.5rem;
    --h2-font-size: 1.25rem;
    --h3-font-size: 1.125rem;
    --normal-font-size: .938rem;
    --small-font-size: .813rem;
    --smaller-font-size: .75rem;

    /* Font weight */
    --font-medium: 500;
    --font-semi-bold: 600;

    /* Margin Bottom */

    --mb-0-25: .25rem;
    --mb-0-5: .5rem;
    --mb-0-75: .75rem;
    --mb-1: 1rem;
    --mb-1-5: 1.5rem;
    --mb-2: 2rem;
    --mb-2-5: 2.5rem;
    --mb-3: 3rem;

    /* z index */

    --z-tooltip: 10;
    --z-fixed: 100;
    --z-modal: 1000;
    
    --border-radius: 6px;
  }

  /* Font size for large devices */

  @media screen and (min-width: 968px){
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

  /* Reusable css clases */
  section {
    padding: 100px 0;
  }

  /* Layout */
  .grid {
    display: grid;
    gap: 1.5rem;
  }

  .container {
    padding: 0 1rem;
  }

  @media (min-width: 350px) {
    .container {
      padding: 0 2rem;
    }
  }

  @media (min-width: 769px) {
    .container {
      margin-left: auto;
      margin-right: auto;
      padding: 0.4rem 4.3rem;
    }
  }

  /* SCROLL BAR */

  ::-webkit-scrollbar{
    width: .6rem;
    border-radius: .5rem;
    background-color: hsl(var(--hue-color), 8%, 38%);
  }

  ::-webkit-scrollbar-thumb{
    background-color: hsl(var(--hue-color), 8%, 26%);
    border-radius: .5rem;
  }

  ::-webkit-scrollbar-thumb:hover{
    background-color: hsl(var(--hue-color), 8%, 20%);
}
`;