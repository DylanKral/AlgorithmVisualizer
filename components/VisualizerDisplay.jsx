import React from "react";

import './VisualizerDisplay.css'

function VisualizerDisplay({data}) {
    return(
        <div>
            {data.map((value,idx) => (
                <div key= {idx}
                className="bar"
                style={{height: `${value}px`}}>
                </div>
            ))}
        </div>
    )
}

export default VisualizerDisplay