import React from 'react';

const TransactionItem = ({ transaction, dispatch }) => {
  const sign = transaction.amount < 0 ? '-' : '+';
  const deleteTransaction = (id) => {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id,
    });
  };
  return (
    <li className={transaction.amount >= 0 ? 'plus' : 'minus'}>
      {transaction.text}
      <span>
        {sign}${Math.abs(transaction.amount)}
      </span>
      <button
        className='delete-btn'
        onClick={() => deleteTransaction(transaction.id)}
      >
        x
      </button>
    </li>
  );
};

export default TransactionItem;
