
//Merge Sort Algorithm
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
    for (let i = 0; i < mergedArray.length; i++){
      mergedArray[i].isExamined = true;
  
      await new Promise((resolve) => setTimeout(resolve, .1))
      setData([...mergedArray])
    }
    for (let i = 0; i < mergedArray.length; i++){
      mergedArray[i].isExamined = false;
  
      await new Promise((resolve) => setTimeout(resolve, .1))
      setData([...mergedArray])
    }
    
    return mergedArray;
  }