export async function heapSort(arr, setData, duration){
    var N = arr.length;
 
    // Build heap (rearrange array)
    for (var i = Math.floor(N / 2) - 1; i >= 0; i--){
        heapify(arr, N, i);
    }

    // One by one extract an element from heap
    for (var i = N - 1; i > 0; i--) {
        // Move current root to end
        arr[0].isExamined =  true;
        arr[i].isExamined = true;
        await new Promise((resolve) => setTimeout(resolve, duration));
      setData([...arr])

        var temp = arr[0];
        arr[0] = arr[i];
        arr[i] = temp;

        await new Promise((resolve) => setTimeout(resolve, duration));
        setData([...arr])
        arr[0].isExamined = false;
        // call max heapify on the reduced heap
        heapify(arr, i, 0);
        arr[i].isExamined = false;
        
    }

    for (let i = 0; i < arr.length; i++){
        arr[i].isExamined = true;
    
        await new Promise((resolve) => setTimeout(resolve, duration))
        setData([...arr])
      }
      for (let i = 0; i < arr.length; i++){
        arr[i].isExamined = false;
    
        await new Promise((resolve) => setTimeout(resolve, duration))
        setData([...arr])
      }

    setData([...arr])
}

function heapify(arr,N,i){
    var largest = i; // Initialize largest as root
    var l = 2 * i + 1; // left = 2*i + 1
    var r = 2 * i + 2; // right = 2*i + 2

    // If left child is larger than root
    if (l < N && arr[l].value > arr[largest].value)
        largest = l;
        

    // If right child is larger than largest so far
    if (r < N && arr[r].value > arr[largest].value)
        largest = r; 
        

    // If largest is not root
    if (largest != i) {
        var swap = arr[i];
        arr[i] = arr[largest];
        arr[largest] = swap;
       

        // Recursively heapify the affected sub-tree
        heapify(arr, N, largest);
    }
}