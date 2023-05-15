import { createGlobalStyle } from "styled-components";

const globalstyle = createGlobalStyle`

    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html, body, #root{
        height: 100%;
    }

    body{
        background-color: #F8FDFF;
    }

    button{
        background-color: none;
        border: none;
        outline: none;
    }

    a{
        outline: none;
        text-decoration: none;
    }
`

export default globalstyle;