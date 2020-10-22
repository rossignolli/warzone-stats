import {createGlobalStyle} from 'styled-components'


import logoImg from '../images/bg.png';


export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
}

body{
    background: #131919 url(${logoImg}) no-repeat;
    background-size: contain;
    -webkit-font-smoothing: antialiased;
}

body, input, button {
    font: 16px Roboto, sans-serif;
}

button {
    cursor: pointer;
}


#root {
    max-width: 960px;
    margin: 0 auto;
    padding: 40px 20px;
    display: flex;
}


`