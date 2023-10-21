import React from "react";

import './VisualizerContainer.css'
import VisualizerDisplay from "./VisualizerDisplay";
import { useArrayData } from "../context/ArrayDataContext";

function VisualizerContainer() {
    const contextValue = useArrayData()
    const { data } = contextValue
    
    
    return (
        <div className="container">
           <VisualizerDisplay data={data}/>
        </div>
    )
}

export default VisualizerContainer

