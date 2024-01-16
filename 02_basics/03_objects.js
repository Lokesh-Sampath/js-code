
const JSuser = {
          name: "Lokesh",
          age:19
}

console.log(JSuser["name"]);

JSuser.greetings = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JSuser.greetings());