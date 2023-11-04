import { useArrayData } from "../context/ArrayDataContext";


export async function bubbleSort(arr, setData){
  console.log("Bubble Sort Starting")

  const sortedArray = [...arr]

  for( let step = 0; step < sortedArray.length -1; step++){
    for(let j = 0; j < sortedArray.length - step -1; j++){
      sortedArray[j].isExamined = true
      sortedArray[j+1].isExamined = true


      await new Promise((resolve) => setTimeout(resolve, 50));
      setData([...sortedArray])

      let temp = sortedArray[j]
      if(sortedArray[j+1].value < sortedArray[j].value){
        sortedArray[j] = sortedArray[j+1]
        sortedArray[j+1] = temp
        sortedArray[j+1].isExamined = true

      }

      sortedArray[j].isExamined = false;
      
      await new Promise((resolve) => setTimeout(resolve,50))
      setData([...sortedArray])
     
    } 
  }
  return sortedArray
}


export function binarySort(arr) {
    
}

export async function selectionSort(arr, setData){
    console.log("Selection Sort Starting")
    console.log(arr)
    console.log(arr[1].value)

    const sortedArray = [...arr]

    for (let i = 0; i < sortedArray.length - 1; i++) {
        let temp = sortedArray[i].value; // save initial value incase of another lower value
        
        sortedArray[i].isExamined = true;

        await new Promise((resolve) => setTimeout(resolve, 100));
        setData([...sortedArray]);
        
        let minIndex = i;  // index of the element with the lowest value

        for (let j = i + 1; j < sortedArray.length; j++) {

          sortedArray[j].isExamined = true;

          await new Promise((resolve) => setTimeout(resolve, 100));
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
        await new Promise(resolve => setTimeout(resolve, 100))
        setData([...sortedArray])
      }
      return sortedArray
    
}