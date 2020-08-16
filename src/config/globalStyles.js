import { createGlobalStyle } from 'styled-components';
import 'typeface-open-sans';

const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: ${({ theme }) => theme.typography.mainFont};
        font-size: ${({ theme }) => theme.typography.baseFont};
    }
    body {
        color: ${({ theme }) => theme.typography.colorFont};
        background: ${({ theme }) => theme.typography.backColor};

        padding: 3rem;
    }
    h1 {
        margin-bottom: 2rem;
        font-size: 2em;
    }
    h2 {
        margin-bottom: 1.5rem;
        font-size: 1.5em;
    }
    img{
        max-width: 100%;
    }
`;

export default GlobalStyle;
