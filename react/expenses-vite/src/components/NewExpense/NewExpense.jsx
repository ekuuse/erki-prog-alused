import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isFormVisible, setFormVisible] = useState(false);

  const toggleFormVisibility = (boolean) => {
    setFormVisible(boolean);
  };

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    toggleFormVisibility(false);
  };

  return (
    <div>
      {!isFormVisible && (
        <button onClick={() => toggleFormVisibility(true)}>Add Expense</button>
      )}
      {isFormVisible && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={() => toggleFormVisibility(false)}
        />
      )}
    </div>
  );
};

export default NewExpense;
