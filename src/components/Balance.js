import React from 'react';

const Balance = ({ totalBalance }) => {
    return (
        <div className="balance">
            <h2>Total Balance: ${totalBalance.toFixed(2)}</h2>
        </div>
    );
};

export default Balance;
