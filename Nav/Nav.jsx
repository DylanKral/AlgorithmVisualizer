import React, {useState} from "react";
import { useArrayData } from "../context/ArrayDataContext";

import "./Nav.css"

function Nav() {
    const { arrayLength, sliderHandler} = useArrayData()
    console.log(arrayLength)
    return(
    <div className="nav-container">
        <nav>
            <select name="AlgorithmMenu" id="dropdown">
                <option value="binarySort">Binary Sort</option>
                <option value="insertionSort">Insertion Sort</option>
                <option value="bubbleSort">Bubble Sort</option> 
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
            <button>Start Visualizer</button>
        </nav>
    </div>
    )
}

export default Nav