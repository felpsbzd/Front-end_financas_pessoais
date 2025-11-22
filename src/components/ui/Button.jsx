import React from 'react';

const Button = ({ children, onClick, type = "button", variant = "primary" }) => {
  // variant pode ser 'primary' ou 'danger'
  return (
    <button 
      type={type} 
      className={`btn btn-${variant}`} 
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;