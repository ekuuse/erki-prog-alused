import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import ExpensesFilter from "./components/Expenses/ExpensesFilter";
import { useState, useEffect } from "react";

const d_expenses = [{
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
  date: new Date(2023, 11, 11),
  title: "New car",
  price: 12299.99,
},
{
  id: 'id4',
  date: new Date(2024, 11, 11),
  title: "New cccccar",
  price: 1229993.99,
},]

function App() {
  const [expenses, setExpenses] = useState(() => {
    const expensesFromLS = JSON.parse(localStorage.getItem('expenses'))
    return expensesFromLS || []
  });

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses))
  }, [expenses])

  const addExpenseHandler = (expense) => {
    const uniqueId = 'id' + (expenses.length + 1);
    const newExpense = {
      ...expense,
      id: uniqueId,
    };
    setExpenses((prevExpenses) => [...prevExpenses, newExpense]);
  };

  const [filterYear, setFilterYear] = useState('2023')
  
  const fexpenses = expenses.filter(
    (expense) => new Date(expense.date).getFullYear() === parseInt(filterYear)
  );
  
  //return
  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler}/>
      <ExpensesFilter onChangeFilter={setFilterYear}/>
      <Expenses expenses={fexpenses} />
    </div>
  );
}

export default App;
