import React from 'react';
import Card from '../ui/Card';
import { formatCurrency } from '../../utils/formatter';

const SummaryCards = ({ summary }) => {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
      <Card>
        <h3>Entradas</h3>
        <p style={{ fontSize: '1.5rem', color: 'var(--color-success)', fontWeight: 'bold' }}>
          {formatCurrency(summary.income)}
        </p>
      </Card>
      
      <Card>
        <h3>Saídas</h3>
        <p style={{ fontSize: '1.5rem', color: 'var(--color-danger)', fontWeight: 'bold' }}>
          {formatCurrency(summary.expense)}
        </p>
      </Card>
      
      <Card style={{ background: 'var(--color-primary)', color: 'white' }}>
        <h3 style={{ color: 'white' }}>Total</h3>
        <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
          {formatCurrency(summary.total)}
        </p>
      </Card>
    </div>
  );
};

export default SummaryCards;