import React from 'react';
import Header from './components/ui/Header';
import TransactionForm from './components/finance/TransactionForm';
import TransactionList from './components/finance/TransactionList';
import SummaryCards from './components/finance/SummaryCards';
import FinancialChart from './components/finance/FinancialChart'; // O Gráfico
import { useTransactions } from './hooks/useTransactions';
import { Toaster } from 'sonner';

function App() {
  const { transactions, addTransaction, removeTransaction, toggleStatus, summary } = useTransactions();

  return (
    <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', paddingBottom: '4rem' }}>
      <Toaster richColors position="top-right" theme="dark" />
      <Header 
        title="FinTech Pro" 
        subtitle="Controle Financeiro Next-Gen" 
      />
      
      {/* Grid Superior: Resumo + Gráfico */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <SummaryCards summary={summary} />
        </div>
        <FinancialChart summary={summary} />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
        {/* Lado Esquerdo: Form */}
        <section>
          <TransactionForm onAdd={addTransaction} />
        </section>

        {/* Lado Direito: Lista */}
        <section>
          <h2 style={{ marginBottom: '1rem', color: 'white', fontWeight: 300 }}>
            Histórico de Movimentações
          </h2>
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