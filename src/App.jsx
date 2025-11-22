import React from 'react';
import Header from './components/ui/Header';
import Card from './components/ui/Card';
import Button from './components/ui/Button';
import Input from './components/ui/Input';

function App() {
  return (
    <div className="container">
      <Header title="FinTech" subtitle="Controle Financeiro" />
      
      <Card>
        <h3>Teste de UI Kit</h3>
        <Input label="Valor (R$)" placeholder="0,00" />
        <Button onClick={() => alert('Clicou!')}>Adicionar Transação</Button>
      </Card>
      
      <Card>
        <p>Item de exemplo</p>
        <Button variant="danger">Excluir</Button>
      </Card>
    </div>
  );
}

export default App;