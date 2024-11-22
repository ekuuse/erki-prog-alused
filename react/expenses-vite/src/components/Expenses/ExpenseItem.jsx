import ExpenseDate from './ExpenseDate.jsx'
import Card from '../UI/Card.jsx'
import './ExpenseItem.css'
import { useState } from 'react'

const ExpenseItem = (props) => {
    console.log(props)
    const [title, setTitle] = useState(props.expenseData.title)

    const [priceText, setPriceText] = useState(props.expenseData.price)
    console.log(title)
    console.log(priceText)

    const clickHandler = () => {
        console.log('Clicked!')
        setTitle(`Updated by click ${title}`)
        console.log(title)
        setPriceText(`Updated by click ${title}`)
    }

    return (
        <Card className ='expense-item'>
            <ExpenseDate date={props.expenseData.date}/>
            <div className='expense-item__description'>
                <h2>{props.expenseData.title}</h2>
                <div className='expense-item__price'>{priceText}</div>
            </div>
            <button onClick={() => clickHandler()}>Click Me</button>
        </Card>
    )  
}

export default ExpenseItem