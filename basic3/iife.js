//immediately invoked functions expressions

(function chai() {
    console.log(`db connect`)
})();

( (name) => {
    console.log(`iife in arrow function ${name}`)
} )('swapnil')