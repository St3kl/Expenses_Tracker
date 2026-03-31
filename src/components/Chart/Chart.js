import React from "react";
import Charbar from "./CharBar";
import "./chart.css";
const Chart=(props)=>{
    const dataPointsValue = props.dataPoints.map(dataPoint => dataPoint.value);
    const maxTotal = Math.max(...dataPointsValue);

return (
    <div className="chart">
        {props.dataPoints.map((dataPoint) => (
        <Charbar 
         key={dataPoint.label}
          value={dataPoint.value}
            maxValue={maxTotal} 
            label={dataPoint.label}/>
            ))}
    </div>
)
}

export default Chart