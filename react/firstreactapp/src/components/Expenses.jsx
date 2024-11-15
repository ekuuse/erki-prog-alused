import ExpenseItem from './ExpenseItem';
import Card from './Card.jsx'
import './Expenses.css'

const Expenses = (props) => {
    return (
        <Card className="expenses">
            <ExpenseItem data={props.data[0]}/>
            <ExpenseItem data={props.data[1]}/>
        </Card>
    )
}

export default Expenses