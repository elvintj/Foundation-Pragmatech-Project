let ad = prompt("Adinizi daxil edin:");
let soyad;
let letters = /^[A-Za-z]+$/;
let check = 0;

if(ad.match(letters))
{
    check = true;
}
while(check != true)
{
    ad = prompt("Adinizi herflerle daxil edin!");
    if(ad.match(letters))
    {
        check = true;
    }
}
if(check == true)
{
    soyad = prompt("Soyadiniz daxil edin:")
    check = false;
    if(soyad.match(letters))
    {
        check = true;
    }
    while(check != true)
    {
        soyad = prompt("Soyadinizi herflerle daxil edin!")
        if(soyad.match(letters))
        {
            check = true;
        }
    }
}
let result = `${ad} ${soyad} sen xos gelmisen`;
alert(result);