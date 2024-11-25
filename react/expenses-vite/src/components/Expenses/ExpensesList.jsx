import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  if (props.expenses.length === 0) {
    return <p>No expenses found.</p>;
  }

  return (
    <>
      {props.expenses.map((expense) => (
        <ExpenseItem expenseData={expense} key={expense.id} />
      ))}
    </>
  );
};

export default ExpensesList;
