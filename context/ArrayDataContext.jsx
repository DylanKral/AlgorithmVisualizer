import React, { createContext, useState, useContext } from "react";
import * as algorithms from '../algorithms/Algorithms'

const ArrayDataContext = createContext();

export function useArrayData() {
    return useContext(ArrayDataContext);
}

export function ArrayDataProvider({ children }) {
    const [arrayLength, setArrayLength] = useState(50);
    const [selectedAlgorithm, setSelectedAlgorithm] = useState('selectionSort')
    const [duration, setDuration] = useState(100)

    function executeAlgorithm(){
        
        if(!selectedAlgorithm){
            console.log("Not executing, Nothing selected")
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

    function durationHandler(e){
        const newDuration = e.target.value
        console.log(newDuration)
        setDuration(newDuration)
    }

    return (
        <ArrayDataContext.Provider value={{ 
            data, 
            arrayLength, 
            duration,
            sliderHandler,
            durationHandler, 
            executeAlgorithm, 
            setSelectedAlgorithm }}>
            {children}
        </ArrayDataContext.Provider>
    );
}   

export default useArrayData