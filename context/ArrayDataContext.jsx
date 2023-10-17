import React, { createContext, useState, useContext } from "react";

const ArrayDataContext = createContext();

export function useArrayData() {
    return useContext(ArrayDataContext);
}

export function ArrayDataProvider({ children }) {
    const [arrayLength, setArrayLength] = useState(10);

    function generateArray(length) {
        return Array.from({length}, () => Math.floor(Math.random() * 250));
    }

    const [data, setData] = useState(generateArray(arrayLength));

    function sliderHandler(e) {
        const newValue = e.target.value;
        setArrayLength(newValue);
        setData(generateArray(newValue));
    }

    return (
        <ArrayDataContext.Provider value={{ data, arrayLength, sliderHandler }}>
            {children}
        </ArrayDataContext.Provider>
    );
}   

export default useArrayData