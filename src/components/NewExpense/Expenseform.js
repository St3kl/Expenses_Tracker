// Import Module
import React, {useState} from "react";
import "./NewExp.css"
// import ExpenseDate from "../ExpenseDate";


const ExpenseForm = (props) =>{

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '', enteredAmount: '', enteredDate: ''
    // })

     const titleChangeHandler = (e)=> {
        // console.log(e.target.value)
        setEnteredTitle(e.target.value)
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: e.target.value,
        // })
        // setUserInput((prevSate)=>{
        //     return {...prevSate, enteredTitle: e.target.value}
        // })
     };
     const amountChangeHandler = (e)=> {
        // console.log(e.target.value)
        setEnteredAmount(e.target.value)
        //   setUserInput({
        //     ...userInput,
        //     enteredAmount: e.target.value,
        // })
     };
     const dateChangeHandler = (e)=> {
        // console.log(e.target.value)
        setEnteredDate(e.target.value)
        //   setUserInput({
        //     ...userInput,
        //     enteredDate: e.target.value,
        // })
     };
      const submitHandler = (e)=>{
        e.preventDefault();

        const expenseData ={
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }
        console.log(expenseData);
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('')
      };
    return<form className="new-expense" onSubmit={submitHandler}>
        <div className="new-expense-controls">
            <div className="new-expense-control">
                <label>Title</label>
                <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
            </div>
            <div className="new-expense-control">
                <label>Amount</label>
                <input type="number" min="0.01" step="0.01" value={enteredAmount}  onChange={amountChangeHandler}/>
            </div>
            <div className="new-expense-control">
                <label>Date</label>
                <input value={enteredDate} type="date" min="2020-01-01" max="2026-12-31" onChange={dateChangeHandler}/>
            </div>
        </div>
        <div className="new-expense-action">
            <button type="submit">Add Expense</button>
        </div>
    </form>
}

// Export Module
export default ExpenseForm