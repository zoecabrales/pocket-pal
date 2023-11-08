import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
    }

    :root{
        --primary-color: #614F38; /* Earthy brown color */
        --color-green: #42874F; /* Earthy green color */
        --color-grey: #8D8D8D; /* Earthy grey color */
        --color-accent: #A46464; /* Earthy red color */
        --color-delete: #f22727; /* Darker red color */
    }

    body{
        font-family: 'Nunito', sans-serif;
        font-size: clamp(0.8rem, 1.2vw, 1rem); /* Smaller font size */
        overflow: hidden;
        color: var(--color-grey); /* Earthy grey color */
    }

    h1, h2, h3, h4, h5, h6{
        color: var(--primary-color); /* Earthy brown color */
    }

    .error{
        color: var(--color-delete); /* Darker red color */
        animation: shake 0.5s ease-in-out;
        @keyframes shake {
            0%{
                transform: translateX(0);
            }
            25%{
                transform: translateX(10px);
            }
            50%{
                transform: translateX(-10px);
            }
            75%{
                transform: translateX(10px);
            }
            100%{
                transform: translateX(0);
            }
        }
    }
`;
