import styled from "styled-components";

export const Container = styled.header`
  background: var(--blue);
` 

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 2rem 1rem 9rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button{
    font-size: 1rem;
    color: #fff;
    background: var(--blue-light);
    /* button vem com uma border por padrão */
    border: 0; 
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 2.5rem;

    transition: filter 0.2s;
    
    &:hover{
      filter: brightness(0.9);
    }
  }
`