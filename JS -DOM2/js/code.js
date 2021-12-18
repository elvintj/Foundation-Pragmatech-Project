
//function 1 starts
function changeBackground()
{
    document.getElementsByTagName("div")[1].style.background = "cyan";
}
// function 1 ends

// function 2 starts
function changeHeader()
{
    document.querySelector("h1").style.color = "red";
}
// function 2 ends

// function 3 starts
let element = document.querySelectorAll("ul li");
function changeTextColor()
{
    document.querySelector("p").style.color = "yellow";
    for(let i in element)
    {
        element[i].style.color = "blue";
    }
}
// function 3 ends

// function 4 starts
let sum = 0;
let element2 = document.querySelector("p").innerHTML;
function countLetters()
{
    for(let i in element)
    {
        for(let j in element[i].innerHTML)
        {
            if(element[i].innerHTML[j] != ' ' && element[i].innerHTML[j] != '.') sum++;
        }
    }

    for(let i in element2)
    {
        if(element2[i] != ' ' && element2[i] != '.') sum++;
    }

    document.querySelector(".card > div").innerHTML += sum;
}
// function 4 ends

// function 7 starts
function designPhoto()
{
    document.querySelector("img").style.boxShadow = "10px 10px 10px black";
}
// function 7 ends

// function 8 starts
function changePhoto()
{
    document.querySelector("img").src = "img2.jpg";
}
// function 8 ends

// function 10 starts
function changeOrder()
{
    let temp;
    temp = element[0].innerHTML;
    element[0].innerHTML = element[6].innerHTML;
    element[6].innerHTML = temp;
}
// function 10 ends

// function 11 starts
function setColor()
{
    for(let i in element)
    {
        if(i % 2 == 0) element[i].style.background = "red";
        else element[i].style.background = "blue";
    }
}
// function 11 ends

// function 12 starts
function replaceLetter()
{
    for(let i in element)
    {
        element[i].innerHTML = element[i].innerHTML.replace('e', 'ə');
    }
}
// function 12 ends

