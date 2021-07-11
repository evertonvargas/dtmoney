import { useState } from "react";

import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from "./components/NewTransactionModal";

import { GlobalStyle } from "./styles/global"

function App() {
  const [isNewTransactionsModalOpen, setIsNewTransactionsModalOpen] = useState(false)

  function handleOpenNewTransctions(){
    setIsNewTransactionsModalOpen(true)
  }

  function handleCloseNewTransctions(){
    setIsNewTransactionsModalOpen(false)
  }

  return (
    <>
      <Header onOpenNewTransctionsModal={handleOpenNewTransctions}/>
      <Dashboard />
      <NewTransactionModal
        isOpen={isNewTransactionsModalOpen} 
        onRequestClose={handleCloseNewTransctions}
      />
      <GlobalStyle />
    </>
  );
}

export default App;
