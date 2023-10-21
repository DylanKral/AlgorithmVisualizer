import React from "react";

import './VisualizerDisplay.css'

function VisualizerDisplay({data}) {
    return(
        <div className="data-container">
            {data.map((item,idx) => (
                <div key= {idx}
                className={`bar ${item.isExamined ? 'examined' : ''}`}
                style={{height: `${item.value}px`}
                
                }>
                </div>
            ))}
        </div>
    )
}

export default VisualizerDisplay