let str='hai all how are you'
let value=''
let word=''
for(let i=str.length-1;i>=0;i--){
    if(str[i]==' '){
        value=word+" "+value
        word=''
    }else{
        word=word+str[i]
    }
}
 value=word+' '+value

console.log(value);


let str1='hello'

let len=str1.length
let str2= str1[len-1]
for(let i=0;i<len-1;i++){

    str2+=str1[i]
}
console.log(str2);
