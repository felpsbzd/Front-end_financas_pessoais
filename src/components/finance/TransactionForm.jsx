import React, { useState } from 'react';
import Card from '../ui/Card';
import Input from '../ui/Input';
import Button from '../ui/Button';
import { toast } from 'sonner';
const TransactionForm = ({ onAdd }) => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('expense'); // 'income' ou 'expense'

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!description.trim() || !amount) {
      toast.error("Preencha todos os campos!"); // <--- Toast de Erro
      return;
    }

    onAdd({ description, amount, type });
    
    toast.success("Transação registrada com sucesso!"); // <--- Toast de Sucesso

    setDescription('');
    setAmount('');
  };

  return (
    <Card>
      <h3>Nova Transação</h3>
      <form onSubmit={handleSubmit}>
        <Input 
          label="Descrição" 
          placeholder="Ex: Aluguel, Salário..." 
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        
        <div style={{ display: 'flex', gap: '1rem' }}>
          <Input 
            label="Valor (R$)" 
            type="number" 
            placeholder="0.00" 
            step="0.01"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          
          <div className="input-group">
            <label>Tipo</label>
            <select 
              className="input-field" 
              value={type} 
              onChange={(e) => setType(e.target.value)}
              style={{ height: '100%' }}
            >
              <option value="income">Entrada (+)</option>
              <option value="expense">Saída (-)</option>
            </select>
          </div>
        </div>

        <Button type="submit" variant="primary">
          Adicionar Transação
        </Button>
      </form>
    </Card>
  );
};

export default TransactionForm;