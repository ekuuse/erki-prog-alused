import logo from './logo.svg';
import './App.css';
import Expenses from './components/Expenses/Expenses';

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
    <Expenses data={expenses}/>
  );
}

export default App;
