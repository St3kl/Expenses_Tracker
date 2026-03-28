// Importing Modules
import React from "react";
import ExpenseDate from "./ExpenseDate";
import Card from './Card'
import "./ExpenseItem.css"
function ExpenseItem(props){

    return (
       <li>
         <Card className="expense-item">
    
            <ExpenseDate date={props.date}/>
            <div className="expense-item_description">
                <h2  className="item">{props.title}</h2>
                <div className="expense-item_price">${props.amount}</div>
            </div>
          {/* <button onClick={clickHandler}>Change Title</button> */}
        </Card>
       </li>
    )
}

// Exporting Modules
export default ExpenseItem;