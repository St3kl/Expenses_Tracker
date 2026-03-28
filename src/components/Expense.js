// Import Module
import React, {useState} from "react";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpenseItem from "./ExpenseItem";
import Card from './Card'
import "./ExpenseItem.css"


const Expense = (props)=>{

const [filteredYear, setFilteredYear] = useState('2020');
const filterChangeHandler = selectedYear =>{ 
    setFilteredYear(selectedYear); 
}
const filteredExpenses = props.items.filter((expense)=>{
    return expense.date.getFullYear().toString() === filteredYear
})

//   let expenseContent = <p>No expense found.</p>;
//   if(filteredExpenses.length > 0){
//     expenseContent = filteredExpenses.map((expense)=>(
//         <ExpenseItem  key={expense.id} title={expense.title} amount={expense.amount} date={expense.date}/>))
//   }

return(
    <Card className="card">


        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
        <ExpensesList items={filteredExpenses}/> 
        {/* {expenseContent} */}
        {/* {filteredExpenses.length === 0 && <p>No expenses found.</p>}
        {filteredExpenses.length > 0 && 
        filteredExpenses.items.map(expense =>(<ExpenseItem  key={expense.id} title={expense.title} amount={expense.amount} date={expense.date}/>))} */}
        {/* <ExpenseItem title={props.items[0].title} amount={props.items[0].amount} date={props.items[0].date}></ExpenseItem>
        <ExpenseItem title={props.items[1].title} amount={props.items[1].amount} date={props.items[1].date}></ExpenseItem>
        <ExpenseItem title={props.items[2].title} amount={props.items[2].amount} date={props.items[2].date}></ExpenseItem>
        <ExpenseItem title={props.items[3].title} amount={props.items[3].amount} date={props.items[3].date}></ExpenseItem> */}
       
</Card>
)
}
// Export  Module
export default Expense;