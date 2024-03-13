function sortUpperLower(S) {
    
    let upper = [];
    let lower = [];
  
    for (let i = 0; i < S.length; i++) {
       
        if (S[i] === S[i].toUpperCase()) {
           
            upper.push(S[i]);
        } else {
           
            lower.push(S[i]);
        }
    }
   
    upper.sort();
    lower.sort();
   
    let sortedString = upper.join('') + lower.join('');
   
    return sortedString;
}

let S = "AbCdEfGhIjKlMnOpQrStUvWxYz";
console.log(sortUpperLower(S));


/////qwdasfawd


// function stringReverse(text,num){
//     let text1 = text.slice("")
//     let result = text1.slice(num).concat(text1.slice(0,num))
//     console.log(result)
// }
// const t ="sibin"
// stringReverse(t,-2)