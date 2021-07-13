import { createContext, useState, useEffect, ReactNode } from "react";
import { api } from "../services/api";

interface Transaction {
  id: number;
  title: string;
  type: string;
  category: string;
  amount: number;
  createdAt: string;
}

// interface TransactionInput{
//   title: string;
//   type: string;
//   category: string;
//   amount: number;
// }

type TransactionInput= Omit<Transaction, 'id' | 'createdAt' >;

//type TransactionInput= Pick<Transaction, 'title' | 'type' |'category' |'amount'>;

interface TransactionsProviderProps {
  children: ReactNode;
}

interface TransactionsContextData{
  transactions: Transaction[];
  createTransaction: (props: TransactionInput) => void;
}

export const TransactionsContext = createContext<TransactionsContextData>({} as 
  TransactionsContextData);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api.get("transactions")
       .then((response) => setTransactions(response.data.transactions));
  }, []);

  function createTransaction(transaction: TransactionInput){
    api.post('transactions', transaction)
  }

  return (
    <TransactionsContext.Provider value={{ transactions , createTransaction}}>
      {children}
    </TransactionsContext.Provider>
  );
}