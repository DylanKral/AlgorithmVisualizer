import React, {useEffect, useState} from "react";
import { useArrayData } from "../context/ArrayDataContext";
import * as algorithms from '../algorithms/Algorithms'

import "./Nav.css"

function Nav() {
    const [arrayMaxLength, setArrayMaxLength] = useState(getArrayMaxLength());

    useEffect(() => {
        function handleResize() {
            setArrayMaxLength(getArrayMaxLength())
        }

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    })

    function getArrayMaxLength() {
        const screenWidth = window.innerWidth;

        console.log(screenWidth)

        if( screenWidth < 400) { 
            return 60;
        }else if(400 < screenWidth && screenWidth< 500 ){
            return 70;
        }
        else if(500 <= screenWidth && screenWidth< 600){
            return 90;
        }
        else if(600 <= screenWidth && screenWidth< 700){
            return 110;
        }
        else if(700 <= screenWidth && screenWidth< 800){
            return 130;
        }
        else{
            return 150;
        }
    }

    const { 
        data, 
        arrayLength, 
        sliderHandler, 
        durationHandler,
        setSelectedAlgorithm, 
        executeAlgorithm
    } = useArrayData()
    
    function algorithmChangeHandler(e){
        
        setSelectedAlgorithm(e.target.value)
        console.log(e.target.value)
    }

    return(
    <div className="nav-container">
        <nav>
            <select name="AlgorithmMenu" id="dropdown" onChange={algorithmChangeHandler}>
                <option value="selectionSort">Selection Sort</option> 
                <option value="bubbleSort">Bubble Sort</option>
                <option value="insertionSort">Insertion Sort</option>
                <option value="mergeSort">Merge Sort</option>
                <option value="quickSort">Quick Sort</option>
                <option value="heapSort">Heap Sort</option>
                <option value="radixSort">Radix Sort</option>
            </select>
            <label>Set the number of elements for the array
                <input 
                type="range"
                min="5"
                max={arrayMaxLength}
                length={arrayLength}
                onChange={sliderHandler}
                ></input>
            </label>
            <label>
                Set the Speed for the Algorithm
                <input 
                type='range'
                min='0'
                max='200'
                onChange={durationHandler}
                ></input>
            </label>
            <button id="start" onClick={executeAlgorithm}>Start Visualizer</button>
        </nav>
    </div>
    )
}

export default Nav