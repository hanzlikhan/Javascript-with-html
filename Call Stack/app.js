function hello() {
    console.log("inside hello function");
    console.log("hello");
}
function demo() {
    console.log("calling hello Function");
    hello();
}
console.log("calling demo");
demo()
console.log("done, bye ");