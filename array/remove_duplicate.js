function removeduplicate(arr){
    for(let i=0;i<arr.length;i++){
     if(arr[i]===arr[i+1]){
         arr.splice(i,1)
         i--
     }
    }
 }
 arr=[3,3,4,4,5,6,7,7]
 
 // let c= [new Set(arr)]
 
  removeduplicate(arr)
 console.log(arr)
 //console.log(c)
 let newObj = {}
 newObj.someProperty;
 console.log(newObj)
 // Creating an object
 let myObject = {};
 
 // Accessing a property
 myObject.someProperty; // JavaScript looks for someProperty in myObject and its prototype chain
 
 // Accessing a method
 // myObject.someMethod(); // JavaScript looks for someMethod in myObject and its prototype chain
 
 // Without currying
 const add = (a, b, c) => a + b + c;
 const partiallyAppliedAdd = add.bind(null, 1, 2);
 const result = partiallyAppliedAdd(3); // Output: 6
 
 // With currying
 const curryAdd = a => b => c => a + b + c;
 const curriedAdd = curryAdd(1)(2);
 const resultCurried = curriedAdd(3); // Output: 6
 console.log(resultCurried);
 
 