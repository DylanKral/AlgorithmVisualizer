import React, {useState} from "react";
import { useArrayData } from "../context/ArrayDataContext";
import * as algorithms from '../algorithms/Algorithms'

import "./Nav.css"

function Nav() {
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
                max="150"
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
            <button onClick={executeAlgorithm}>Start Visualizer</button>
        </nav>
    </div>
    )
}

export default Nav