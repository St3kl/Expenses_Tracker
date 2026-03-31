import React from "react";
import "./chart.css";

const CharBar =(props)=>{
    let barfill = "0%";
    if(props.maxValue > 0){
        barfill = Math.round((props.value / props.maxValue) * 100) + "%";
    }
return (
    <div className="chart_bar">
        <div className="chart_bar__inner">
            <div className="chart_bar__fill" style={{height:barfill}}></div>
        </div>
        <div className="chart_bar__label">{props.label}</div>
    </div>
)
}

export default CharBar;