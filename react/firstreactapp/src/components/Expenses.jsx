import ExpenseItem from './ExpenseItem';
import './Expenses.css'

const Expenses = (props) => {
    return (
        <div className="App">
            <ExpenseItem data={props.data[0]}/>
            <ExpenseItem data={props.data[1]}/>
        </div>
    )
}

export default Expenses