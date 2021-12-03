let username = prompt("username i daxil edin:");
while(username == '')
{
    username = prompt("Deyerler bos ola bilmez, username i daxil edin:");
}

let password = prompt("password u daxil edin:");
while(password =='')
{
    password = prompt("Deyerler bos ola bilmes, password u daxil edin:");
}

while(username != 'admin' && password == 123456)
{
    username = prompt("Daxil edilen username yanlisdir, username i yeniden daxil edin:");
    while(username == '')
    {
        username = prompt("Deyerler bos ola bilmez, username i daxil edin:");
    }
}
while(username == 'admin' && password != 123456)
{
    password = prompt("Daxil edilen password yanlisdir, password u yeniden daxil edin:");
    while(password =='')
    {
        password = prompt("Deyerler bos ola bilmes, password u daxil edin:");
    }
}
while(username != 'admin' || password != 123456)
{
    username = prompt("Daxil edilen username ve ya password yanlisdir, username i yeniden daxil edin:");
    while(username == '')
    {
        username = prompt("Deyerler bos ola bilmez, username i daxil edin:");
    }
    password = prompt("password u yeniden daxil edin:");
    while(password =='')
    {
        password = prompt("Deyerler bos ola bilmes, password u daxil edin:")
    }
}

if(username == 'admin' && password == 123456)
{
    alert("Tebrikler, siz sisteme daxil oldunuz");
}