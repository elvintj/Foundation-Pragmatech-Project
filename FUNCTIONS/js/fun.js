let element = document.querySelectorAll("ul li"); //common element for all li


//function 1 
function changeBackground()
{
    document.body.style.background = "cyan";
}

// function 2 
function changeHeader()
{
    document.querySelector("h1").style.color = "red";
}

// function 3 
function changeTextColor()
{
    document.querySelector(".card > p").style.color = "blue";
    document.querySelector(".card ul").style.color = "blue";
}

// function 4 
function countLetters()
{
    let lettersCount = 0;
    let wordsArrOfP = document.querySelector("p").innerText.replaceAll('.', '').replaceAll(' ', '');
    lettersCount += wordsArrOfP.length;

    for(let i of element)
    {
        lettersCount += i.innerText.replaceAll('.', '').replaceAll(' ', '').length;
    }
    document.querySelector(".cards > div").innerText = `Nəticə : ${countWords}`;
}

// function 5 
function countWords()
{
    let wordsArrOfP = document.querySelector("p").innerText.replaceAll('.', '').split(" ");
    let countWords = wordsArrOfP.length;

    for(let i in element)
    {
        let wordsArrofLi = element[i].innerText.replaceAll('.', '').split(" ");
        countWords += wordsArrofLi.length;
    }
    document.querySelector(".cards > div").innerText = `Nəticə : ${countWords}`;
}

// function 6
function checkForAWord()
{
    let check = 'NO';
    for(let i of element)
    {
        if(i.innerText.includes("Proqramçı")) check = 'YES';
    }
    document.querySelector(".cards > div").innerText = `Nəticə : ${countWords}`;
}

// function 7 
function designPhoto()
{
    document.querySelector("img").style.border = "4px solid black";
}

// function 8 
function changePhoto()
{
    document.querySelector("img").src = "img/img2.jpg";
}

// function 9
function countVowelsAndConsonants()
{
    let numOfVowels = 0, numOfConsonants = 0;
    let vowels = /[aıoueəiöü]/gi;
    let lettersInText = document.querySelector("p").innerText.replaceAll('.', ' ').replaceAll(' ', '');
    numOfVowels = lettersInText.match(vowels).length;
    numOfConsonants = lettersInText.length - numOfVowels;

    for(let i in element)
    {
        i.innerText = i.innerText.replaceAll('.', ' ').replaceAll(' ', '');
        numOfVowels += i.match(vowels).length;
        numOfConsonants += (i.length - numOfVowels);
    }
    document.querySelector(".cards > div").innerText = `Nəticə : Sait : ${numOfVowels}, Samit : ${numOfConsonants}`;
}
// function 10 
function changeOrder()
{
    let temp;
    temp = element[0].innerHTML;
    element[0].innerHTML = element[6].innerHTML;
    element[6].innerHTML = temp;
}

// function 11 
function setColor()
{
    for(let i in element)
    {
        if(i % 2 == 0) element[i].style.background = "red";
        else element[i].style.background = "blue";
    }
}

// function 12 
function replaceLetter()
{
    for(let i of element)
    {
        i.innerHTML = i.innerHTML.replaceAll('e', 'ə');
    }
}
