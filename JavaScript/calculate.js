
let name1 = prompt("Adinizi daxil edin");
let surname1;
let letters = /^[A-Za-z]+$/;
let check = 0;

if(name1.match(letters))
{
    check = true;
}
while(check != true)
{
    name1 = prompt("Adinizi herflerle daxil edin");
    if(name1.match(letters))
    {
        check = true;
    }
}
if(check == true)
{
    surname1 = prompt("Soyadinizi daxil edin");
    check = false;
    if(surname1.match(letters))
    {
        check = true;
    }
    while(check != true)
    {
        surname1 = prompt("Soyadinizi herflerle daxil edin");
        if(surname1.match(letters))
        {
            check = true;
        }
    }
}

let task1 = prompt("Ilk tapsiriginizin neticesini daxil edin");
while(task1*1 < 0 || task1*1 > 100)
{
    task1 = prompt("Tapsirigin neticesini reqemlerle 0-100 araliginda daxil edin")
}
while(task1*1 != task1)
{
    task1 = prompt("Tapsirigin neticesini reqemlerle daxil edin");
    while(task1*1 < 0 || task1*1 > 100)
    {
        task1 = prompt("Tapsirigin neticesini reqemlerle 0-100 araliginda daxil edin")
    }
}


let task2 = prompt("Ikinci tapsiriginizin neticesini daxil edin");
while(task1*2 < 0 || task2*1 > 100)
{
    task2 = prompt("Tapsirigin neticesini reqemlerle 0-100 araliginda daxil edin")
}
while(task2*1 != task2)
{
    task2 = prompt("Tapsirigin neticesini reqemlerle daxil edin");
    while(task1*2 < 0 || task2*1 > 100)
    {
        task2 = prompt("Tapsirigin neticesini reqemlerle 0-100 araliginda daxil edin")
    }
}

if(task1*1 == task1 && task2*1 == task2)
{
    let project = prompt("Projecti bitirmisinizse 'true', bitirmemisinzse, 'false' daxil edin");
    while(project != 'true' && project != 'false')
    {
        project = prompt("Projecti bitirmisinizse 'true', bitirmemisinzse, 'false' daxil edin");
    }
    if((task1*1+task2*1)/2 >=90 && project=='true')
    {
        alert("Tebrikler, Siz qizil sertifikat ve ixtisas proqramlarina endirim qazandiniz!")
    }
    else if((task1*1+task2*1)/2 >=70)
    {
        alert("Tebrikler, Siz ixtisas proqramlarina kecid qazandiniz!")
    }
    else
    {
        alert("Teessuf ki, sizin neticeniz ixtisas programlari ucun kifayet deyil")
    }
}

