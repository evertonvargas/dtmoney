import { useTransactions } from "../../hooks/useTransactions";

import entradasImg from "../../assets/Entradas.svg";
import saidaImg from "../../assets/Saidas.svg";
import totalImg from "../../assets/Total.svg";

import { Container } from "./styles";

export function Summary() {
  const { transactions } = useTransactions();

  // const totalDeposits = transactions.reduce((acc, transaction) => {
  //   if(transaction.type === "deposit"){
  //     return acc + transaction.amount;
  //   }else{
  //     return acc;
  //   }
  // }, 0)

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === "deposit") {
        acc.deposits += transaction.amount;
        acc.total += transaction.amount;
      } else {
        acc.withdraws -= transaction.amount;
        acc.total -= transaction.amount;
      }

      return acc;
    },
    {
      deposits: 0,
      withdraws: 0,
      total: 0,
    }
  );

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={entradasImg} alt="entradas" />
        </header>
        <strong>
          {new Intl.NumberFormat("pt-br", {
            style: "currency",
            currency: "BRL",
          }).format(summary.deposits)}
        </strong>
      </div>

      <div>
        <header>
          <p>Saídas</p>
          <img src={saidaImg} alt="saídas" />
        </header>
        <strong>
          {new Intl.NumberFormat("pt-br", {
            style: "currency",
            currency: "BRL",
          }).format(summary.withdraws)}
        </strong>
      </div>

      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="total" />
        </header>
        <strong>
          {new Intl.NumberFormat("pt-br", {
            style: "currency",
            currency: "BRL",
          }).format(summary.total)}
        </strong>
      </div>
    </Container>
  );
}
