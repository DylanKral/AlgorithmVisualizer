import { useArrayData } from "../context/ArrayDataContext";
[duration] = useArrayData

export async function bubbleSort(arr, setData,duration){
  console.log("Bubble Sort Starting")

  const sortedArray = [...arr]

  for( let step = 0; step < sortedArray.length -1; step++){
    for(let j = 0; j < sortedArray.length - step -1; j++){
      sortedArray[j].isExamined = true
      sortedArray[j+1].isExamined = true


      await new Promise((resolve) => setTimeout(resolve, duration));
      setData([...sortedArray])

      let temp = sortedArray[j]
      if(sortedArray[j+1].value < sortedArray[j].value){
        sortedArray[j] = sortedArray[j+1]
        sortedArray[j+1] = temp
        sortedArray[j+1].isExamined = true

      }

      sortedArray[j].isExamined = false;
      
      await new Promise((resolve) => setTimeout(resolve,duration))
      setData([...sortedArray])
     
    } 

    
  }
  for (let i = 0; i < sortedArray.length; i++){
      sortedArray[i].isExamined = false

      await new Promise((resolve) => setTimeout(resolve, duration))
      setData([...sortedArray])
    }
  return sortedArray
}


export function binaryInsertionSort(arr) {
    
}

export function insertionSort(arr,setData){

}

export async function selectionSort(arr, setData, duration){
    console.log("Selection Sort Starting")
    console.log("Duration: ",duration, "ms")

    const sortedArray = [...arr]

    for (let i = 0; i < sortedArray.length - 1; i++) {
        let temp = sortedArray[i].value; // save initial value incase of another lower value
        
        sortedArray[i].isExamined = true;

        await new Promise((resolve) => setTimeout(resolve, duration));
        setData([...sortedArray]);
        
        let minIndex = i;  // index of the element with the lowest value

        for (let j = i + 1; j < sortedArray.length; j++) {

          sortedArray[j].isExamined = true;

          await new Promise((resolve) => setTimeout(resolve, duration));
          setData([...sortedArray]);

          if (sortedArray[j].value > sortedArray[i].value) {

            sortedArray[j].isExamined = false
            continue; // if the element ast index j is greater than the element at
                      // index i, move on to next
          } else if (sortedArray[j].value < sortedArray[minIndex].value) {

            minIndex = j; // if the element at index j is less than the element at
                          // index i, update the minIndex
          }

          sortedArray[j].isExamined = false
        }
    
        if (minIndex !== i) {
          sortedArray[i].value = sortedArray[minIndex].value;
          sortedArray[minIndex].value = temp;
        }
        sortedArray[i].isExamined = false
        await new Promise(resolve => setTimeout(resolve, duration))
        setData([...sortedArray])
      }
      return sortedArray
    
}