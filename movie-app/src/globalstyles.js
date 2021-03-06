import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root {
        --maxWidth: 1280px;
        --white: #FFFFFF;
        --lightGray: #eee;
        --medGray: #353535;
        --darkGray: #1c1c1c;
        --largeFont: 2.5rem;
        --medFont: 1.5rem;
        --regFont: 1.2rem;
        --smallFont: 1rem;
    }
    * {
        box-sizing:border-box;
        font-family: 'Abel', sans-serif;
    }

    body {
        margin: 0;
        padding: 0;

        h1 {
            font-size: 2rem;
            font-weight: 600;
            color: var(--white);
        }

        h3 {
            font-size: 1.1rem;
            font-weight: 600;
        }

        p {
            font-size: 1rem;
            color: var(--white);
        }
    }

`;