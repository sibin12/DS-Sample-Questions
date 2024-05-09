function Msort(arr){
    if(arr.length <2){
        return arr;
    }
    let mid = Math.floor(arr.length/2)
    let left = arr.slice(0,mid)
    let right = arr.slice(mid)
    return merge(Msort(left),Msort(right))
}
function merge(left,right){
    let sortArr = []
    while(left.length && right.length){
        if(left[0] <= right[0]){
            sortArr.push(left.shift())
        }else{
            sortArr.push(right.shift())
        }
    }
    return [ ...sortArr, ...left, ...right]
}

let arr =[4,2,5,1,8,3,9]
console.log(Msort(arr))