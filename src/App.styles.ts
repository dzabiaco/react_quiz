import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    html {
        height: 100vh;
    }

    body {
        margin: 0;
        padding: 0 20px;
        display: flex;
        justify-content: center;
    }

    *{
        box-sizing: border-box;
        font-family: 'Catamaran', sans-serif;
    }

    .App {
        display: flex;
        height: 100vh;
        text-align: center;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .answers{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    .Footer{
        width: 100%;
        dispaly: flex;
        flex-direction: row;
        align-items: flex-end;
        margin-top: 40px;
    }

    .Footer .logo img{
        width: 150px;
        height: 150px;
    }
`;

type ButtonWrapperProps = {
    correct: boolean;
    userClicked: boolean;
}



export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    .score {
        font-size: 2rem;
        margin: 0;
    }

    h1{
        font-family: Fascinate Inline, sans-serif;
        background-image:linear-gradient(180deg, #fff, #87f1ff);
        background-size: 100%;
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        -moz-background-clip: text;
        -mox-text-fill-color: transparent;
        filter: drop-shadow(2px 2px #008583);
        font-size: 70px;
        font-weight: 400;
        text-align: center;
        margin: 20px;
    }

    .flex {
        display: flex;
        flex-wrap: wrap;
    }
    
    .btn{
        width: auto;
        height: auto;
        min-height: 50px;
        margin: 10px;
        line-height: 1.2;
        box-shadow: 0 5px 10px rgba(0,0,0,0,0.25);
    }
    .btn:hover{
        opacity: 0.8;
    }

    .FormGroup{
        display: flex;
        width: 100%;
        justify-content: space-around;
    }
`;


