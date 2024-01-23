// named iife

(function chai () {
    console.log("Hello");
})();

//unnamed iife

((name) => {
    console.log(`Hello, ${name}`);
})('Lokesh');