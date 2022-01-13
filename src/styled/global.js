import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`/* Box sizing */
    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    /* Reset margins */
    body,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    figure,
    picture {
        margin: 0;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p {
        font-weight: 400;
    }

    /* set up the body */
    body {
        background-color: #ededed;
        min-height: 100vh;
        font-family: "Montserrat", sans-serif;

        display: grid;
        grid-template-rows: min-content 1fr;
    }

    /* make images easier to work with */
    img,
    picture {
        max-width: 100%;
        display: block;
    }

    /* make form elements easier to work with */
    input,
    button,
    textarea,
    select {
        font: inherit;
    }

    /* remove animations for people who've turned them off */
    @media (prefers-reduced-motion: reduce) {
        *,
        *::before,
        *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
        }
    }
`;
