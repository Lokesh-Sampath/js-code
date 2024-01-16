// Number

let num = 100;
console.log(num.toFixed(2));

let num1 = 123.984857;
console.log(num1.toPrecision(3));

let num3 = 1000000;
console.log(num3.toLocaleString('en-IN'));

// Maths

// abs(),round(),ceil(),floor(),min(),max(),random()

// to find random numb btw two numbers

let min = 10;
let max = 20;
console.log(Math.floor(Math.random()*(max-min+1)+min));