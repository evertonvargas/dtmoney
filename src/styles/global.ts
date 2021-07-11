import { createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle` 
  :root{
    --background: #f0f2f5;
    --red: #E52E4D;
    --green: #33cc95;
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

  html{
    @media (max-width: 1080px){
      font-size: 93.75%; 
    }

    @media (max-width: 720px){
    }
  }

  body{
    background: var(--background);
     -webkit-font-smoothing: antialiased;
  }

  /* Preciso colocar input, textarea, button pq eles tem um font-family particular e não respeitam o body */
  body, input, textarea, button{
    font-family: "Poppins", sans-serif;
    font-weight: 400;
  }

  h1,h2,h3,h4,h5,h6,strong{
    font-weight: 600;
  }

  button{
    cursor: pointer;
  }

  [disabled]{
    opacity: 0.6;
    cursor: not-allowed;
  }

  .react-modal-overlay{
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;

    background: rgba(0,0,0,0.5);

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .react-modal-content{
    background: var(--background);
    width: 100%;
    max-width: 576px;
    padding: 3rem;
    position: relative;
    border-radius: .25rem;
  }
`