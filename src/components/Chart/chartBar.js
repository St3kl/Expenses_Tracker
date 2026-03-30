import React from "react";


const ChartBar = props =>{
    let barfillHeight = '0%';
    if(props.max > 0){
        barfillHeight = Math.round((props.value / props.maxValue) * 100) + '%'
    }
return <div className="chart_bar">
    {/* {props.dataPoint.map(dataPoint => <ChartBar key={dataPoint.label} value={dataPoint.value} maxValue={null} label={dataPoint.label}/>)} */}
    <div className="chart_bar_inner">
        <div className="chart_bar_fill" style={{height:barfillHeight}}></div>
    </div>
    <div className="chart_bar_label">{props.label}</div>
</div>
}

export default ChartBar;