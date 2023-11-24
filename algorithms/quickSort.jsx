
//Quick Sort Algorithm wiht pivot as the last element in array
export async function quickSort(arr, setData, duration) {
    
    const qs = async (arr) => {
      if (arr.length <= 1) {
        return arr;
      }
    
      let pivot = arr[0];
      let leftArr = [];
      let rightArr = [];
    
      for (let i = 1; i < arr.length; i++) {
        if (arr[i].value < pivot.value) {
          leftArr.push(arr[i]);
        } else {
          rightArr.push(arr[i]);
        }
      }
    const sortedLeft = await qs(leftArr);
    const sortedRight = await qs(rightArr);

    // Combine the results
    const sortedArr = [...sortedLeft, pivot, ...sortedRight];

    // Update state with the current sorted array
    await new Promise((resolve) => setTimeout(resolve, duration));
    setData([...sortedArr]);

    return sortedArr;
    };
    
    arr = await qs(arr)

    for (let i = 0; i < arr.length; i++){
      arr[i].isExamined = true;
  
      await new Promise((resolve) => setTimeout(resolve, .1))
      setData([...arr])
    }
    for (let i = 0; i < arr.length; i++){
      arr[i].isExamined = false;
  
      await new Promise((resolve) => setTimeout(resolve, .1))
      setData([...arr])
    }
  }