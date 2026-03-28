
import ExpenseItem from './ExpenseItem'

const ExpensesList = (props)=>{
// let expenseContent = <p>No expense found.</p>;
  if(props.items.length === 0){
return <h2 className='falback_list'>Found no expenses</h2>
};

  return (
    <ul className='expense_list'>
        {
            props.items.map((expense)=>(
        <ExpenseItem  key={expense.id} title={expense.title} amount={expense.amount} date={expense.date}/>))
  
        }
    </ul>
  )
}


export default ExpensesList;