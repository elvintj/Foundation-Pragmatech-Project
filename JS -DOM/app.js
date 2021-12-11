
let element = document.querySelector("div");

//innerHTML

element.innerHTML = "Click buttons to change width or background color";
element.style.padding = 400;

let total = 300;
function changElement()
{
    total += 50;
    element.style.width = `${total}px`;
}

function getRandomColor()
{
    const h = Math.random()*360;
    const s = Math.random()*100;
    const l = Math.random()*100;
    
    return `hsl(${h}deg, ${s}%, ${l}%)`;
}
function changeBackground()
{
    element.style.background = getRandomColor();
}
