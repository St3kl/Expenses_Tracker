import React from "react";
import ChartBar from'./chartBar'

const Chart = props =>{
    const dataPointValaue = props.dataPoints.map(dataPoint=> dataPoint.value)
    const totalMaxnum = Math.max(...dataPointValaue)
return <div className="chart">
    {props.dataPoint.map(dataPoint => <ChartBar key={dataPoint.label} value={dataPoint.value} maxValue={totalMaxnum} label={dataPoint.label}/>)}
</div>
}

export default Chart