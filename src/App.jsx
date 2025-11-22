import React from 'react';
import Header from './components/ui/Header';
import TransactionForm from './components/finance/TransactionForm';
import TransactionList from './components/finance/TransactionList';
import SummaryCards from './components/finance/SummaryCards';
import { useTransactions } from './hooks/useTransactions';

function App() {
  // Chamamos nosso Hook poderoso aqui
  const { 
    transactions, 
    addTransaction, 
    removeTransaction, 
    toggleStatus, 
    summary 
  } = useTransactions();

  return (
    <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
      <Header 
        title="FinTech Dashboard" 
        subtitle="Gerencie suas finanças pessoais com eficiência" 
      />
      
      {/* Cards de Resumo (Topo) */}
      <SummaryCards summary={summary} />

      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem' }}>
        {/* Formulário de Cadastro */}
        <section>
          <TransactionForm onAdd={addTransaction} />
        </section>

        {/* Lista de Transações */}
        <section>
          <h2 style={{ marginBottom: '1rem' }}>Histórico</h2>
          <TransactionList 
            transactions={transactions} 
            onRemove={removeTransaction}
            onToggle={toggleStatus}
          />
        </section>
      </div>
    </div>
  );
}

export default App;