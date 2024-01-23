// Like when we have a object we can also chain the methods inside a function

const nums = [1,2,3,4,5];
let Newnums = nums
                               .map(  (num) => num*10)
                               .filter(  (num) => num>40)
console.log(Newnums);