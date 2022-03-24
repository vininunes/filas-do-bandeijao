import { createGlobalStyle } from 'styled-components'
import theme from './theme'

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    @media (max-width: 1080px) {
    html {
            font-size: 93.75%;
        }
    }

    @media (max-width: 720px) {
    html {
            font-size: 87.5%;
        }
    }

    body {
        background-color: ${theme.colors.white};

        user-select: none;
    }

    body, input, textarea, button {
        font-family: 'Roboto', sans-serif;
    }

    h1 {
        font-size: 3.5rem;
    }

    h2 {
        font-size: 1.75rem;
}
`
