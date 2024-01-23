/* syntax 
array.forEach(element => {
    });
*/

// Mainly we will work with arrays

const myarr  = ['js','cpp','py'];

myarr.forEach( function (val,index) {
    console.log(val,index);
}) // using normal function

myarr.forEach( (val,index) => {
    console.log(val,index);
} ) // using arrow function

function Value(val,index){
    console.log(val,index);
}
myarr.forEach(Value); // creating function separatly and accessing it
