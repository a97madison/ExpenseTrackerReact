import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';

import './NewExpense.css';

function NewExpense(props) {
  const [isEditing, setIsEditing] = useState(false)

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };

    props.onAddExpense(expenseData);

    toggleEditingHandler();
  }

  const toggleEditingHandler = () => {
    setIsEditing(prevState => {
      return !prevState;
    });
  };

  return (
    <div className="new-expense">
      {!isEditing && <button onClick={toggleEditingHandler}>Add New Expense</button>}
      {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={toggleEditingHandler} />}
    </div>
  );
}

export default NewExpense;
