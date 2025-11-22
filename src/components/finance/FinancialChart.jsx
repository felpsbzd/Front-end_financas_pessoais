import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import Card from '../ui/Card';

const FinancialChart = ({ summary }) => {
  const data = [
    { name: 'Entradas', value: summary.income, color: '#10b981' }, // Verde Neon
    { name: 'Saídas', value: summary.expense, color: '#ef4444' },  // Vermelho Neon
  ];

  // Se não tiver dados, não mostra nada
  if (summary.total === 0 && summary.expense === 0) return null;

  return (
    <Card className="h-full">
      <h3 style={{ marginBottom: '1rem' }}>Análise Visual</h3>
      <div style={{ width: '100%', height: 250 }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data}
              innerRadius={60} // Faz virar um Donut
              outerRadius={80}
              paddingAngle={5}
              dataKey="value"
              stroke="none"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#1e1b4b', 
                borderRadius: '8px', 
                border: 'none',
                color: '#fff'
              }} 
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
      {/* Legenda Customizada */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', fontSize: '0.9rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
          <div style={{ width: 10, height: 10, background: '#10b981', borderRadius: '50%' }}></div>
          <span>Entradas</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
          <div style={{ width: 10, height: 10, background: '#ef4444', borderRadius: '50%' }}></div>
          <span>Saídas</span>
        </div>
      </div>
    </Card>
  );
};

export default FinancialChart;