import React, { createContext, useState, useContext } from "react";
import * as algorithms from '../algorithms/Algorithms'

const ArrayDataContext = createContext();

export function useArrayData() {
    return useContext(ArrayDataContext);
}

export function ArrayDataProvider({ children }) {
    const [arrayLength, setArrayLength] = useState(50);
    const [selectedAlgorithm, setSelectedAlgorithm] = useState(null)

    function executeAlgorithm(){
        if(!selectedAlgorithm){
            return
        }

        const sortedData = algorithms[selectedAlgorithm](data, setData)
    }

    function generateArray(length) {
        
        return Array.from({length}, () =>({value:Math.floor((Math.random() * 250)+5),
                                            isExamined: false }));
    }

    const [data, setData] = useState(generateArray(arrayLength));

    function sliderHandler(e) {
        const newValue = e.target.value;
        setArrayLength(newValue);
        setData(generateArray(newValue));
    }

    return (
        <ArrayDataContext.Provider value={{ data, arrayLength, sliderHandler, executeAlgorithm, setSelectedAlgorithm }}>
            {children}
        </ArrayDataContext.Provider>
    );
}   

export default useArrayData