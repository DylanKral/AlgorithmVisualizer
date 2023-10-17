import React from "react";

import './VisualizerContainer.css'
import VisualizerDisplay from "./VisualizerDisplay";

function VisualizerContainer(props) {
    
    const bars = [10,30,30,23,16,13,67,32,43,2,5,19,54,21,56,80]

    return (
        <div className="container">
           <VisualizerDisplay data={bars}/>
        </div>
    )
}

export default VisualizerContainer

