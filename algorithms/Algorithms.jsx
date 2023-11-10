import { useArrayData } from "../context/ArrayDataContext";

export async function bubbleSort(arr, setData, duration){
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

export async function insertionSort(arr,setData, duration){
  let i = 0, key, j = 0;
  let n = arr.length
  const sortedArray = [...arr]

  for (i = 1; i < n; i++) {
      sortedArray[i].isExamined = true

      await new Promise((resolve) => setTimeout(resolve, duration));
      setData([...sortedArray]);

      key = sortedArray[i].value;
      j = i - 1;

      // Move elements of arr[0..i-1],
      // that are greater than key, 
      // to one position ahead of their
      // current position
      while (j >= 0 && sortedArray[j].value > key) {
        sortedArray[j].isExamined = true

        await new Promise((resolve) => setTimeout(resolve, duration));
        setData([...sortedArray]);

        sortedArray[j + 1].value = sortedArray[j].value;
        sortedArray[j].isExamined = false

        await new Promise((resolve) => setTimeout(resolve, duration));
        setData([...sortedArray]);
          j = j - 1;
        
      }
      sortedArray[j + 1].value = key;
      sortedArray[i].isExamined = false
      await new Promise((resolve) => setTimeout(resolve, duration));
      setData([...sortedArray]);
  }

  setData([...sortedArray])

  return sortedArray
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

export async function mergeSort(arr, setData, duration) {
  if (arr.length <= 1) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const left = await mergeSort(arr.slice(0, mid), setData, duration);
  const right = await mergeSort(arr.slice(mid), setData, duration);

  return merge(left, right, setData, duration);
}

async function merge(left, right, setData, duration) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;
  setData([...result]);

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex].value < right[rightIndex].value) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
    await new Promise((resolve) => setTimeout(resolve, duration));
    setData([...result]);
  }

  // Add remaining elements from left and right arrays
  const mergedArray = result.concat(left.slice(leftIndex), right.slice(rightIndex));
  setData([...mergedArray]);

  return mergedArray;
}