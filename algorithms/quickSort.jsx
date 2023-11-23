
//Quick Sort Algorithm wiht pivot as the last element in array
export async function quickSort(arr, setData, duration) {
    let low = 0
    let high = arr.length-1
    
   await qs(arr,low, high)
  
    async function qs(arr,low, high){
      if(low < high){
        let j = await partition(arr,low,high);
        await qs(low,j);
        await qs(j+1,high)
      }
    }
  
    async function partition(arr, low, high){
      let pivot = arr[low];
      let i = low;
      let j = high
  
      while(i < j){
        do{
          i++
        }while(arr[i].value <= pivot)
        do{
          j--;
        }while(arr[j].value > pivot)
  
        if (i < j){
          let temp = arr[i].value;
          arr[i].value = arr[j].value;
          arr[j].value = temp;
        }
       
      }
        let temp = arr[low].value;
        arr[low].value = arr[j].value;
        arr[j].value = temp;
  
        await new Promise((resolve)=> setTimeout(resolve, 1))
        setData([...arr])
        return j;
    }
  }