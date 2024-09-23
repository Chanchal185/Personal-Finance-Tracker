import React from 'react';
import './style.css'

const TransactionList = ({ transactions, deleteTransaction }) => {
    return (
        <div>
            <h3>Recent Transactions:</h3>
            {transactions.length === 0 ? (
                <p>No transactions available.</p>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Type</th>
                            <th>Amount</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {transactions.map((transaction, index) => (
                            <tr key={transaction.id}> {/* Use a unique ID if available */}
                                <td>{transaction.description}</td>
                                <td>{transaction.type}</td>
                                <td>${transaction.amount.toFixed(2)}</td>
                                <td>
                                    <button onClick={() => deleteTransaction(index)}>Remove</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default TransactionList;
