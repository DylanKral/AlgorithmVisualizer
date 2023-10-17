import React from "react";

import './VisualizerContainer.css'
import VisualizerDisplay from "./VisualizerDisplay";
import { useArrayData } from "../context/ArrayDataContext";

function VisualizerContainer() {
    const { data } = useArrayData()
    
    
    return (
        <div className="container">
           <VisualizerDisplay data={data}/>
        </div>
    )
}

export default VisualizerContainer

