import { Container } from "./styles";

import entradasImg from "../../assets/Entradas.svg"
import saidaImg from "../../assets/Saidas.svg"
import totalImg from "../../assets/Total.svg"

import { useContext } from "react";
import { TransactionsContext } from "../../contexts/TransactionsContext";

export function Summary(){
  const transactions = useContext(TransactionsContext)

  return(
    <Container> 
      <div >
        <header>
          <p>Entradas</p>
          <img src={entradasImg} alt="entradas" />
        </header>
        <strong>R$1000,00</strong>
      </div>

      <div >
        <header>
          <p>Saídas</p>
          <img src={saidaImg} alt="saídas" />
        </header>
        <strong>R$500,00</strong>
      </div>

      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="total" />
        </header>
        <strong>R$500,00</strong>
      </div>
    </Container>
  );
}