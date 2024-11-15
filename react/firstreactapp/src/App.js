import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/ExpenseItem';

function App() {
  const expenses = [
    {
      date: new Date(2024,11,11),
      title: 'New book',
      price: 30.99
    },
    {
      date: new Date(2024,11,11),
      title: 'New JEANS B)',
      price: 99.99
    },
  ]

  return (
    <div className="App">
      <ExpenseItem data={expenses[0]}/>
      <ExpenseItem data={expenses[1]}/>
    </div>
  );
}

export default App;
