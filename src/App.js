// import logo from './logo.svg';
// Importing Components
import React, {useState} from "react";
import Expense from "./components/Expense";
// import ExpenseItem from "./components/ExpenseItem"
import NewExpense from './components/NewExpense/NewExpense';
// import ExpensesFilter from './components/ExpensesFilter'; 
import './App.css';
const STATIC_EXPENSES =[
    {
      id:'e1', title:'Car Insurance', amount: 288.99, date:new Date(2026,3,17)
    },
    {
      id:'e2', title:'New TV', amount: 588.99, date:new Date(2026,3,17)
    },
    {
      id:'e3', title:'New Laptop', amount: 1288.99, date:new Date(2026,3,17)
    },
    {
      id:'e4', title:'Modem', amount: 388.99, date:new Date(2026,3,17)
    },
  ];
function App(props) {
  // Create an expense container  and move averything inside 
   const [expenses, setExpenses] = useState(STATIC_EXPENSES)
 
 const addExpenseHandler = expense =>{
    // console.log('In App.js');
    // console.log(expense)
    // setExpenses([expense, ...expenses])
    setExpenses((prevExpenses => {
      return [expense, ...prevExpenses]
    }))
  }


  return (
    <div className="App">
     <NewExpense onAddExpense={addExpenseHandler}/>
     <Expense items={expenses}/>
        
       
    </div>
  );
}

export default App;
