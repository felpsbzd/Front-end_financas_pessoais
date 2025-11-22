import React from 'react';

const Header = ({ title, subtitle }) => {
  return (
    <header className="header">
      <div className="header-content">
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </div>
    </header>
  );
};

export default Header;