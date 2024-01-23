function add(num1,num2){
    return num1+num2;
}
console.log(add(2,4));

function sub(num1,num2){
    console.log(num1-num2);
}
sub(5,2);

function loggedInUser(user){
    if(!user){
        console.log("Please enter the user");
        return
    }

    return `${user} just logged in`
}

let userName  = "Lokesh";

console.log(loggedInUser(userName));
