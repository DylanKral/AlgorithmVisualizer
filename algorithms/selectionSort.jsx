
//selection Sort algorithm
export async function selectionSort(arr, setData, duration){
    console.log("Selection Sort Starting")

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
