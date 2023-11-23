import React, { createContext, useState, useContext, useEffect } from "react";
import { heapSort } from "../algorithms/heapSort";
import { bubbleSort } from "../algorithms/bubbleSort";
import { selectionSort } from "../algorithms/selectionSort";
import { insertionSort } from "../algorithms/insertionSort";
import { quickSort } from "../algorithms/quickSort";
import { mergeSort } from "../algorithms/mergeSort";
import { radixSort } from "../algorithms/radixSort";

const ArrayDataContext = createContext();

export function useArrayData() {
    return useContext(ArrayDataContext);
}

export function ArrayDataProvider({ children }) {
    const [arrayLength, setArrayLength] = useState(50);
    const [selectedAlgorithm, setSelectedAlgorithm] = useState('selectionSort')
    const [duration, setDuration] = useState(100);
    const [arrayMaxLength, setArrayMaxLength] = useState(getMaxArrayLength())

    useEffect(() => {
        function handleResize(){
            setArrayMaxLength(getMaxArrayLength())
        }

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])
    
    function getMaxArrayLength() {
        const screenWidth = window.innerWidth;

        if (screenWidth < 490) {
            return 75;
        }else if (screenWidth < 550) {
            return 95;
        } else if (screenWidth < 700) {
            return 125;
        } else {
            return 150;
        }
    }

    function executeAlgorithm(){
        let sortedData
        if(!selectedAlgorithm){
            console.log("Not executing, No algorithm selected")
            return
        }

        switch (selectedAlgorithm){
            case 'selectionSort':
                sortedData = selectionSort(data, setData,duration);
                break;
            case 'insertionSort':
                sortedData = insertionSort(data, setData,duration);
                break;
            case 'mergeSort':
                sortedData = mergeSort(data, setData,duration);
                break;
            case 'bubbleSort':
                sortedData = bubbleSort(data, setData,duration);
                break;
            case 'heapSort':
                sortedData = heapSort(data, setData,duration);
                break;
            case 'quickSort':
                sortedData = quickSort(data, setData,duration);
                break;
            case 'radixSort':
                sortedData = radixSort(data, setData,duration);
                break;
            
        }

        //const sortedData = algorithms[selectedAlgorithm](data, setData,duration)
    }

    function generateArray(length) {

        return Array.from({length}, () =>({value:Math.floor((Math.random() * 250)+5),
                                            isExamined: false })).slice(0,arrayMaxLength);
    }

    const [data, setData] = useState(generateArray(arrayLength));

    function sliderHandler(e) {
        const newValue = e.target.value;
        console.log(newValue)
        setArrayLength(newValue);
        setData(generateArray(newValue));
    }

    function durationHandler(e){
        const newDuration = e.target.value
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