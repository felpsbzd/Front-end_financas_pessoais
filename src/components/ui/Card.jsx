import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt'; // <--- Import da mágica

const Card = ({ children, className = '' }) => {
  return (
    <Tilt
      glareEnable={true}
      glareMaxOpacity={0.15} // Brilho sutil
      glareColor="#ffffff"
      glarePosition="all"
      border="1px solid rgba(255,255,255,0.1)"
      scale={1.02} // Aumenta um pouquinho quando passa o mouse
      transitionSpeed={1500}
      className={className} // Passa a classe para o Tilt também
    >
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`glass-card`} // Removemos className daqui pois o Tilt já cuida do layout externo
        style={{
          background: 'var(--glass-bg)',
          backdropFilter: 'blur(12px)',
          // Removi a borda e shadow daqui porque o Tilt gerencia melhor o efeito 3D
          boxShadow: 'var(--glass-shadow)',
          borderRadius: 'var(--radius-lg)',
          padding: '1.5rem',
          color: 'var(--text-primary)',
          height: '100%' // Garante que ocupe altura total se necessário
        }}
      >
        {children}
      </motion.div>
    </Tilt>
  );
};

export default Card;