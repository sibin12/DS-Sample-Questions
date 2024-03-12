let array = [1, 2, 3, 4, 5];
for (let i = 0; i < array.length / 2; i++) {
    let temp = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = temp;
}
console.log(array);   

// rotate the array that many steps left and return the result

function leftRotation(array, steps) {
    for(let i=0; i< steps; i++){
      let removed = array.shift();
      array.push(removed);
    }
    return array;
  }
  console.log(leftRotation([1, 2, 3, 4, 5],2));