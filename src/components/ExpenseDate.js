// Import modules

function ExpenseDate(props){
    // const month = props.date.getMonth();
    // const day= props.date.getDate();
    // const year = props.date.getFullYear();
 const month = props.date.toLocaleString('en-US', {month: "long"});
 const day = props.date.toLocaleString('en-US', {day: "2-digit"});
 const year = props.date.getFullYear();

    return(
          <div className="date">
                <div className="date_month">{month}</div> 
                <div className="date_year">{year}</div>
                <div className="date_day">{day}</div>
            </div>
    )
}


// export module
export default ExpenseDate
