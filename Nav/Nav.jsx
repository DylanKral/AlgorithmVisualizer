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

        const breakpoints = [
            { width: 400, maxLength: 60 },
            { width: 500, maxLength: 70 },
            { width: 600, maxLength: 90 },
            { width: 700, maxLength: 110 },
            { width: 800, maxLength: 130 },
            { width: 900, maxLength: 150 },
            { width: 1000, maxLength: 170 },
            { width: 1100, maxLength: 190 },
            { width: 1200, maxLength: 210 },
            { width: 1300, maxLength: 230 },
            { width: 1400, maxLength: 250 },
            { width: Infinity, maxLength: 150 }, // default value
          ];
        
          const { maxLength } = breakpoints.find((bp) => screenWidth < bp.width) || breakpoints[breakpoints.length - 1];
        
          return maxLength;
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