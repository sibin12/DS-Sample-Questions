// const ingredientsList = ["noodles", { list: ["eggs", "flour", "water"] }];
// const ingredientsListDeepCopy = JSON.parse(JSON.stringify(ingredientsList));
// console.log(ingredientsListDeepCopy);

let name= {
    fname:"sibin",
    lname:"silu",
}

printFullName = function (hometown, state){
    console.log(this.fname+" "+this.lname+ " "+ hometown +" "+ state) 
}
printFullName.call(name, "Kerala", "India");

let name2= {
    fname:"Sachin",
    lname:"thendulkar"
}
// function borrowing,

printFullName.call(name2 , "Mumbai", " Maharashtra")


printFullName.apply(name2 , ["Mumbai", " Maharashtra"])

// bind 

let printMyName = printFullName.bind(name2, "Mum", "Maha")
// console.log(printMyName);
function getMinVal(arr){
    console.log(Math.min.apply(null,arr));
}
getMinVal([1,3,4,5])