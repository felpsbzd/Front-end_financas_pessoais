import React from 'react';
import TransactionItem from './TransactionItem';

const TransactionList = ({ transactions, onRemove, onToggle }) => {
  if (transactions.length === 0) {
    return (
      <div style={{ textAlign: 'center', padding: '2rem', color: '#9ca3af' }}>
        <p>Nenhuma transação cadastrada ainda.</p>
      </div>
    );
  }

  return (
    <div className="transaction-list">
      {transactions.map((transaction) => (
        <TransactionItem 
          key={transaction.id} 
          transaction={transaction} 
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
};

export default TransactionList;