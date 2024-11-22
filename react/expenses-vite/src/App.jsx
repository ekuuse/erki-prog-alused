import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import ExpensesFilter from "./components/Expenses/ExpensesFilter";
import { useState } from "react";

function App() {
  const d_expenses = [
    {
      id: 'id1',
      date: new Date(2023, 11, 11),
      title: "New book",
      price: 30.99,
    },
    {
      id: 'id2',
      date: new Date(2024, 11, 11),
      title: "New JEANS B)",
      price: 99.99,
    },
    {
      id: 'id3',
      date: new Date(2025, 11, 11),
      title: "New car",
      price: 12299.99,
    },
    {
      id: 'id4',
      date: new Date(2025, 11, 11),
      title: "New cccccar",
      price: 1229993.99,
    },
  ];

  const [filterYear, setFilterYear] = useState('2023')

  const addExpenseHandler = (expense) => {
    console.log('In App.js')
    console.log(expense)
  }
  
  const expenses = d_expenses.filter(
    (expense) => expense.date.getFullYear() === parseInt(filterYear)
  );
  
  //return
  return (
    <div className="App">
      <ExpensesFilter onChangeFilter={setFilterYear}/>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
