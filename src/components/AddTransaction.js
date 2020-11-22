import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { v4 as uuidv4 } from 'uuid';
const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);
  const { dispatch } = useContext(GlobalContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const id = uuidv4();
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: {
        id,
        amount: +amount,
        text: text.charAt(0).toUpperCase() + text.slice(1),
      },
    });
  };
  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className='form-control'>
          <label htmlFor='text'>Text</label>
          <input
            type='text'
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder='Enter text...'
          />
        </div>
        <div className='form-control'>
          <label htmlFor='amount'>
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type='number'
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder='Enter amount...'
          />
        </div>
        <button className='btn'>Add transaction</button>
      </form>
    </>
  );
};

export default AddTransaction;
