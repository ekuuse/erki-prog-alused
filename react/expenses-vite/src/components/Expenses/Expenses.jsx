import ExpenseItem from "./ExpenseItem.jsx";
import Card from "../UI/Card.jsx";
import "./Expenses.css";
import ExpensesList from "./ExpensesList.jsx";

const Expenses = (props) => {
  const content = <ExpensesList expenses={props.expenses} />;
  return <Card className="expenses">{content}</Card>;
};

export default Expenses;
