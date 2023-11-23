
//insertions sort algorithm
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
  
    for (let i = 0; i < sortedArray.length; i++){
      sortedArray[i].isExamined = true;
  
      await new Promise((resolve) => setTimeout(resolve, duration))
      setData([...sortedArray])
    }
    for (let i = 0; i < sortedArray.length; i++){
      sortedArray[i].isExamined = false;
  
      await new Promise((resolve) => setTimeout(resolve, duration))
      setData([...sortedArray])
    }
  
    return sortedArray
  }