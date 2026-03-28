// Import Module
// import React, {useState} from "react";
import ExpenseForm from "./Expenseform";
const NewExpense = (props) =>{

    const onSaveExpenseDataHandler = (enteredExpenseData)=>{
        const expenseData={
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        console.log(expenseData);
        props.onAddExpense(expenseData);
    }
    return(<div className="new-expense">
        <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler}/>
    </div>)
}

// Export Module
export default NewExpense