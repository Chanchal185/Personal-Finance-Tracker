import React, { useState } from 'react';

const TransactionForm = ({ addTransaction }) => {
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');
    const [type, setType] = useState('Income');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (description && amount) {
            addTransaction({ description, amount: parseFloat(amount), type });
            setDescription('');
            setAmount('');
            setType('Income');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h3>Add New Transaction</h3>
            <input
                type="text"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
            />
            <input
                type="number"
                placeholder="Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                required
            />
            <select value={type} onChange={(e) => setType(e.target.value)}>
                <option value="Income">Income</option>
                <option value="Expense">Expense</option>
            </select>
            <button type="submit">Add Transaction</button>
        </form>
    );
};

export default TransactionForm;
