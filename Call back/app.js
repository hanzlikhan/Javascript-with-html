// setTimeout(() => {
//     console.log("Hanzla faiz");
// }, 3000);
// console.log("Nimra");

h1 = document.querySelector("h1");

function changecolor(color,delay) {
    setTimeout(() => {
        h1.style.color = color;
    }, delay);
   
}
changecolor("red",1000)
changecolor("orange",2000)
changecolor("green",3000)
// setTimeout(() => {
//    h1.style.color = "red"; 
// }, 1000);


// setTimeout(() => {
//    h1.style.color = "orange"; 
// }, 2000);


// setTimeout(() => {
//    h1.style.color = "green"; 
// }, 3000);

setTimeout(changecolor("red"),1000)
setTimeout(changecolor("green"),2000)
setTimeout(changecolor("orange"),3000)
