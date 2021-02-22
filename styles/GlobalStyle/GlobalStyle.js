import {createGlobalStyle} from 'styled-components';

export default function FunGlobalStyle() {
 
    const GlobalStyle = createGlobalStyle`
        :root {
            --primary: ${({ theme }) => theme.colors.primary};
        }
        * {
            font-family: monospace;
            color: #333;
            box-sizing: border-box;
        }

        html,
        body {s
            margin: 0;
            padding: 0;
        }
        body {
            padding-left: 16px;
            padding-right: 16px;
            max-width: 70%;
            margin: auto;
        }
        
        h1,
        h2,
        h3,
        h4,
        h5
        a {
            color: var(--primary);
        }

        button,
        .a {
            transition: opacity .3s;
            &:focus,
            &:hover {
            opacity: .5s;
            color: #255000;
            }
        }

        .postContainer {
            h1 {
            font-size: 2em;
            background-color: var(--primary);
            color: #fff;
            padding: 3px 5px;
            margin: 0;
            display: inline-block;
            }
        }
        .postContainer__post {
            a {
            color: inherit;
            font-weight: bold;
            text-decoration: none;
            }
        }
        .headerContainer {
            display: flex;
            align-items: center;
            padding-top: 16px;
            padding-button: 16px;
            margin-button: 32px;
            img {
            max-width: 50px;
            border-radius: 100%;
            margin-right: 16px;
            }
            h1 {
            margin: 0;
            }
        }

        .footer {
            align-items: bottom;
            font-size: 15px;
        }
    `;

    return GlobalStyle;
}