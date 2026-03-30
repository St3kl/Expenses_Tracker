import React from "react";
import ChartBar from'./ChartBar'
// import ExpensesChart from "../ExpensesChart";

const Chart = props =>{
    const dataPointValue = props.dataPoints.map(dataPoint=> dataPoint.value)
    const totalMaxnum = Math.max(...dataPointValue)
return <div className="chart">
    {props.dataPoints.map(dataPoint => <ChartBar key={dataPoint.label} value={dataPoint.value} maxValue={totalMaxnum} label={dataPoint.label}/>)}
</div>
}

export default Chart;