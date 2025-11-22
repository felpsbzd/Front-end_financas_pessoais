import React from 'react';
import { motion } from 'framer-motion'; // Importando a mágica

const Card = ({ children, className = '' }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} // Começa invisível e um pouco pra baixo
      animate={{ opacity: 1, y: 0 }}  // Sobe suavemente
      transition={{ duration: 0.5 }}
      className={`glass-card ${className}`}
      style={{
        background: 'var(--glass-bg)',
        backdropFilter: 'blur(12px)', // O efeito de desfoque estilo Apple
        border: '1px solid var(--glass-border)',
        boxShadow: 'var(--glass-shadow)',
        borderRadius: 'var(--radius-lg)',
        padding: '1.5rem',
        color: 'var(--text-primary)'
      }}
    >
      {children}
    </motion.div>
  );
};

export default Card;