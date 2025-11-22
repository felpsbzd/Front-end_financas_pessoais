import React from 'react';
import TransactionItem from './TransactionItem';
import { AnimatePresence, motion } from 'framer-motion';

const TransactionList = ({ transactions, onRemove, onToggle }) => {
  return (
    <div className="transaction-list">
      <AnimatePresence mode='popLayout'>
        {transactions.length === 0 ? (
          <motion.p 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            style={{ textAlign: 'center', color: 'var(--text-secondary)', marginTop: '2rem' }}
          >
            Nenhuma transação registrada.
          </motion.p>
        ) : (
          transactions.map((transaction) => (
            <motion.div
              key={transaction.id}
              layout // Magia: Se um item sair, os outros deslizam pro lugar
              initial={{ opacity: 0, x: -50 }} // Entra vindo da esquerda
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}     // Sai indo para a direita
              transition={{ duration: 0.3 }}
            >
              <TransactionItem 
                transaction={transaction} 
                onRemove={onRemove}
                onToggle={onToggle}
              />
            </motion.div>
          ))
        )}
      </AnimatePresence>
    </div>
  );
};

export default TransactionList;