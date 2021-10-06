import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle `
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
        list-style: none;
        font-family: 'Roboto Condensed', sans-serif;
    }

    body{
        background:#D9F2E1;
        color: #312e38;
    }

    body, input, button{
        font-size: 1rem;
    }

    h1, h2, h3, h4, h5 ,h6, strong {
        font-weight: 600;
    }

    button{
        cursor: pointer;
    }

    a{
        text-decoration: none;
    }
`