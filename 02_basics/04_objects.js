//concatination of objects
let obj1 = new Object();

obj1 = {
       name :"Lokesh",
       age: 19,
       islogged : true
}

let obj2  = {
    location: "India",
    city: "Chennai"
}

let obj3 = {...obj1,...obj2};
console.log(obj3);

console.log(Object.keys(obj3));
console.log(Object.values(obj3));
console.log(Object.entries(obj3));
console.log(obj3.hasOwnProperty("name"));

