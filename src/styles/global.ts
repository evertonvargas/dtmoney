import { createGlobalStyle} from "styled-components";

export const GlobalStyled = createGlobalStyle` 
  :root{
    --background: #f0f2f5;
    --red: #E52E4D;
    --blue: #5429CC;
    --blue-light: #6933FF;
    --text-title: #363f5f;
    --text-body: #969cb3;
    --shape: #fff;
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* font-size: 16px; */
  html{
    @media (max-width: 1080px){
      /* 16x0,9375=15px; */
      font-size: 93.75%; 
    }

    @media (max-width: 720px){
      /* font-size: 87.5%; 16x0,875=14px */
    }
  }

  body{
    background: var(---background);
     -webkit-font-smoothing: antialiased; /*fonte mais nítida */
  }

  button{
    cursor: pointer;
  }

  [disabled]{
    opacity: 0.6;
    cursor: not-allowed;
  }
`