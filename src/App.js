import React, { useState } from 'react';
import Balance from './components/Balance';
import TransactionForm from './components/TransactionForm';
import TransactionList from './components/TransactionList';
import './index.css';

const App = () => {
    const [transactions, setTransactions] = useState([]);

    const addTransaction = (transaction) => {
        setTransactions([transaction, ...transactions]);
    };

    const deleteTransaction = (index) => {
        const newTransactions = transactions.filter((_, i) => i !== index);
        setTransactions(newTransactions);
    };

    const totalBalance = transactions.reduce((acc, transaction) => {
        return transaction.type === 'Income' 
            ? acc + transaction.amount 
            : acc - transaction.amount;
    }, 0);

    return (
        <div className="app">
            <h1>Personal Finance Tracker</h1>
            <Balance totalBalance={totalBalance} />
            <TransactionForm addTransaction={addTransaction} />
            <TransactionList transactions={transactions} deleteTransaction={deleteTransaction} />
        </div>
    );
};

export default App;
