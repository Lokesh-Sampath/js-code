/* Syntax
for (const key in object) {
    }
 */

// Since using forof cant be appiled on objects we will use forin

const myobj = {
    'js' : "Javascript",
    'cpp' : "C++",
    'py' : "Python"
}

for (const key in myobj) {
   console.log(key);
} // prints the keys from the obj

for (const val  in myobj) {
  console.log(myobj[val]);
}// prints the value from the obj

for (const key in myobj) {
   console.log(`The keys and value form the object are ${key} : ${myobj[key]}`);
} // printing both key value pair together

