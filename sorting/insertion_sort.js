function insertionSort(arr){
    for(let i=1; i<arr.length;i++){
        let numToIn = arr[i]
        let j= i-1
        while(j>=0 && arr[j] >numToIn){
            arr[j+1] = arr[j]
            j=j-1
        }
        arr[j+1] = numToIn
    }  
}

 let  arr=[5,3,54,4,6,2]
insertionSort(arr)
console.log(arr);
  