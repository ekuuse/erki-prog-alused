import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import ExpensesFilter from "./components/Expenses/ExpensesFilter";
import { useState, useEffect } from "react";
import Error from "./components/UI/Error"

const d_expenses = [
  {
    id: "id1",
    date: new Date(2023, 11, 11),
    title: "New book",
    price: 30.99,
  },
  {
    id: "id2",
    date: new Date(2024, 11, 11),
    title: "New JEANS B)",
    price: 99.99,
  },
  {
    id: "id3",
    date: new Date(2023, 11, 11),
    title: "New car",
    price: 12299.99,
  },
  {
    id: "id4",
    date: new Date(2024, 11, 11),
    title: "New cccccar",
    price: 1229993.99,
  },
];

function App() {
  const [isFetching, setIsFetching] = useState(false)
  const [expenses, setExpenses] = useState([]);
  const [error, setError] = useState(null)
  const [showError, setShowError] = useState(false)

 const getExpenses = async () => {
  setIsFetching(true)
    try {
      const response = await fetch("http://localhost:3005/expenses");
      const responseData = await response.json();
      if(!response.ok){
        throw new Error('Failed fetching data')
      }
      setExpenses(responseData.expenses);
    } catch(error) {
      setError({
        title: 'An error occured!',
        message: 'Failed fetching expenses data, please try again later.'
      })
      setShowError(true)
    }
    setIsFetching(false)
  };

  useEffect(() => {
    getExpenses();
    console.log(expenses);
  }, []);

  const errorHandler = () => {
    setError(null)
    setShowError(false)
  }

  const addExpense = async (expense) => {
    try {
      const response = await fetch('http://localhost:3005/add-expense', {
        method: 'POST',
        body: JSON.stringify(expense),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const responseData = await response.json()
      if(!response.ok){
        throw new Error('Failed saving data')
      }
      setExpenses([expense, ...expenses])
    } catch(error) {
      setError({
        title: 'An error occured!',
        message: 'Failed saving expenses data, please try again.'
      })
    }
  }

  const addExpenseHandler = (expense) => {
    console.log(expense)
    addExpense(expense)
  };

  const [filterYear, setFilterYear] = useState("2023");

  const fexpenses = expenses.filter(
    (expense) => new Date(expense.date).getFullYear() === parseInt(filterYear)
  );

  //return
  return (
    <div className="App">
      { showError && (
        <Error title={error.title} message={error.message} onConfirm={errorHandler}></Error>
      )}
      <NewExpense onAddExpense={addExpenseHandler} />
      <ExpensesFilter onChangeFilter={setFilterYear} />
      <Expenses expenses={fexpenses} isLoading={isFetching} />
    </div>
  );
}

export default App;
