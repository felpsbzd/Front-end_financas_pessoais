import React from 'react';
import { formatCurrency, formatDate } from '../../utils/formatter';
import Button from '../ui/Button';

const TransactionItem = ({ transaction, onRemove, onToggle }) => {
  const isIncome = transaction.type === 'income';
  const isPaid = transaction.status === 'paid';

  return (
    <div className="card" style={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center',
      padding: '1rem',
      borderLeft: `4px solid ${isIncome ? 'var(--color-success)' : 'var(--color-danger)'}`,
      opacity: isPaid ? 0.6 : 1 // Efeito visual se já foi pago/concluído
    }}>
      
      <div style={{ flex: 1 }}>
        <h4 style={{ 
          margin: 0, 
          textDecoration: isPaid ? 'line-through' : 'none' 
        }}>
          {transaction.description}
        </h4>
        <small style={{ color: '#6b7280' }}>
          {formatDate(transaction.date)}
        </small>
      </div>

      <div style={{ textAlign: 'right', marginRight: '1rem' }}>
        <strong style={{ 
          color: isIncome ? 'var(--color-success)' : 'var(--color-danger)',
          display: 'block'
        }}>
          {isIncome ? '+ ' : '- '}
          {formatCurrency(transaction.amount)}
        </strong>
        <small 
          onClick={() => onToggle(transaction.id)}
          style={{ cursor: 'pointer', textDecoration: 'underline', fontSize: '0.8rem' }}
        >
          {isPaid ? 'Concluído' : 'Pendente'}
        </small>
      </div>

      <Button variant="danger" onClick={() => onRemove(transaction.id)}>
        🗑️
      </Button>
    </div>
  );
};

export default TransactionItem;