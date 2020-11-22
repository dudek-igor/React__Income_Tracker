import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import TransactionItem from './TransactionItem';

const TransactionList = () => {
  const { transactions, dispatch } = useContext(GlobalContext);
  return (
    <>
      <h3>History</h3>
      <ul className='list'>
        {transactions.map((transaction) => (
          <TransactionItem
            key={transaction.id}
            dispatch={dispatch}
            transaction={transaction}
          />
        ))}
      </ul>
    </>
  );
};

export default TransactionList;
