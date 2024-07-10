h1 = document.querySelector("h1");
function chnageColor(color,delay) {
    setTimeout(() => {
        h1.style.color = color;
    }, delay);
}

chnageColor("red",1000)
chnageColor("blue",2000)
chnageColor("green",3000)