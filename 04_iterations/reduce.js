// Reduce has two things accumulator and current value
//Here the accumulator keeps on adding and the current value changes for each iteration

const nums = [1,2,3,4,5];

let Newnums  = nums.reduce( (acc,curr) => acc+curr*1 ); //This gives me the sum of the whole array
console.log(Newnums); 