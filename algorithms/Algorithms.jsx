import { useArrayData } from "../context/ArrayDataContext";


export function binarySort(arr) {
    
}

export async function selectionSort(arr, setData){
    console.log("Selection Sort Starting")
    const sortedArray = [...arr]

    for (let i = 0; i < sortedArray.length - 1; i++) {
        let temp = sortedArray[i]; // save initial value incase of another lower value
        let minIndex = i;  // index of the element with the lowest value
        for (let j = i + 1; j < sortedArray.length; j++) {
          if (sortedArray[j] > sortedArray[i]) {
            continue; // if the element ast index j is greater than the element at
                      // index i, move on to next
          } else if (sortedArray[j] < sortedArray[minIndex]) {
            minIndex = j; // if the element at index j is less than the element at
                          // index i, update the minIndex
          }
        }
    
        if (minIndex !== i) {
          sortedArray[i] = sortedArray[minIndex];
          sortedArray[minIndex] = temp;
        }

        await new Promise(resolve => setTimeout(resolve, 100))
        setData([...sortedArray])
      }
      return sortedArray
    
}