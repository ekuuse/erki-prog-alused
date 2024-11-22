import ExpenseItem from "./ExpenseItem.jsx";
import Card from "../UI/Card.jsx";
import "./Expenses.css";

const Expenses = (props) => {
    console.log('In expenses')
    console.log(props.expenses)
 //return
  return (
    <Card className="expenses">
      {props.expenses.map((expense) => {
        return <ExpenseItem expenseData={expense} key={expense.id} />;
      })}
    </Card>
  );
};

export default Expenses;
