export async function radixSort(arr, setData, duration){
    let n = arr.length;

    let m = getMax(arr,n);
    console.log(m)
    console.log(arr)

    for(let exp = 1; Math.floor(m/exp) > 0; exp*= 10){
        console.log('herre')
        countSort(arr,n,exp);
        
    }

    setData([...arr]);
    
}

function getMax(arr,n)
{
    let mx = arr[0];
        for (let i = 1; i < n; i++)
            if (arr[i].value > mx.value)
                mx = arr[i];
        return mx;
}

function countSort(arr,n,exp)
{
    let output = new Array(n); // output array
        let i;
        let count = new Array(10);
        for(let i=0;i<10;i++)
            count[i]=0;
  
        // Store count of occurrences in count[]
        for (i = 0; i < n; i++){
            let x = Math.floor(arr[i].value / exp) % 10;
            count[x]++;
        }
        // Change count[i] so that count[i] now contains
        // actual position of this digit in output[]
        for (i = 1; i < 10; i++)
            count[i] += count[i - 1];
  
        // Build the output array
        for (i = n - 1; i >= 0; i--) {
            output[count[x] - 1] = arr[i];
            count[x]--;
        }
  
        // Copy the output array to arr[], so that arr[] now
        // contains sorted numbers according to current digit
        for (i = 0; i < n; i++)
            arr[i] = output[i];

        console.log('here')
}