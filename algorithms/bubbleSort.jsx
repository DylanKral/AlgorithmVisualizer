
//bubble sort algorithm
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