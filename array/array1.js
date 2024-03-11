function removeElement(array,num){
    for(let i=0;i<array.length-1;i++){
        if(array[i]==num){
            array.splice(i,1)
            i--
         }
        }
}

array=[2,3,4,5,6,7,8,9,65,5,5,4]

console.log('before deleting\n'+array+' \n')
removeElement(array,5)

console.log('after removing the element\n'+array)
