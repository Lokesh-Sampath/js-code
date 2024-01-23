// In filter method we  can create a new array by transforming every element that don't belong
// We can also apply certain conditons to it and store it in a new array

const  nums = [1,2,3,4,5];

let Newnums  = nums.filter(  (num) => num>2  );
console.log(Newnums);