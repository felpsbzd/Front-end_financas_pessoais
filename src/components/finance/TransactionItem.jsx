import React from 'react';
import { formatCurrency, formatDate } from '../../utils/formatter';
import { Trash2, CheckCircle, Clock, ArrowUpCircle, ArrowDownCircle } from 'lucide-react';

const TransactionItem = ({ transaction, onRemove, onToggle }) => {
  const isIncome = transaction.type === 'income';
  const isPaid = transaction.status === 'paid';

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center',
      padding: '1rem 1.5rem',
      marginBottom: '0.8rem',
      // Estilo Glassmorphism (Vidro Fosco) para o item
      background: 'rgba(255, 255, 255, 0.03)', 
      border: '1px solid rgba(255, 255, 255, 0.05)',
      borderRadius: '16px',
      color: 'white',
      backdropFilter: 'blur(5px)'
    }}>
      
      {/* Lado Esquerdo: Ícone + Descrição */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flex: 1 }}>
        {/* Ícone Dinâmico (Seta Verde ou Vermelha) */}
        {isIncome ? (
          <ArrowUpCircle color="#10b981" size={28} />
        ) : (
          <ArrowDownCircle color="#ef4444" size={28} />
        )}
        
        <div>
          <h4 style={{ 
            margin: 0, 
            fontSize: '1.1rem', 
            fontWeight: 500,
            textDecoration: isPaid ? 'line-through' : 'none',
            color: isPaid ? '#94a3b8' : 'white' // Fica cinza se pago
          }}>
            {transaction.description}
          </h4>
          <small style={{ color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '4px' }}>
            {formatDate(transaction.date)}
          </small>
        </div>
      </div>

      {/* Lado Direito: Valor + Ações */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
        <div style={{ textAlign: 'right' }}>
          <strong style={{ 
            color: isIncome ? '#10b981' : '#ef4444',
            fontSize: '1.1rem',
            display: 'block'
          }}>
            {isIncome ? '+ ' : '- '}
            {formatCurrency(transaction.amount)}
          </strong>
          
          {/* Badge de Status Clicável */}
          <div 
            onClick={() => onToggle(transaction.id)}
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'flex-end',
              gap: '4px',
              fontSize: '0.8rem',
              cursor: 'pointer',
              color: isPaid ? '#10b981' : '#f59e0b',
              marginTop: '4px'
            }}
          >
            {isPaid ? <CheckCircle size={14}/> : <Clock size={14}/>}
            <span>{isPaid ? 'Pago' : 'Pendente'}</span>
          </div>
        </div>

        {/* Botão de Excluir (Lixeira Minimalista) */}
        <button 
          onClick={() => onRemove(transaction.id)}
          style={{
            background: 'transparent',
            border: 'none',
            color: '#ef4444', // Vermelho
            cursor: 'pointer',
            padding: '8px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'background 0.2s'
          }}
          onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(239, 68, 68, 0.1)'}
          onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
        >
          <Trash2 size={20} />
        </button>
      </div>
    </div>
  );
};

export default TransactionItem;