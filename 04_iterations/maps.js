// For Map first we will create an object for that 
//Then using "set" keyword we will enter the ('key', "Value")

const map = new Map()

map.set('IN', "India");
map.set('USA',"United States of America");

console.log(map)  // prints out in format of key => value

for (const key of map) {
    console.log(`Key in map are ${key}`);
}
/* the op of the above code
Key in map are IN,India
Key in map are USA,United States of America
 */

// so for getting the key and value we will use two parameters

for (const [key,value] of map) {
    console.log(`The key : ${key}, and the value : ${value}`);
}