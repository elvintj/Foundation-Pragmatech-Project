// let num = 1;
// function display()
// {
//     console.log(num);
//     num++;
//     if(num <= 10)
//     {
//         display();
//     }
// }
// // display();

// while(num <= 100)
// {
//     console.log(num++);
// }

// for(let i = 0; i <= 100; i += 1)
// {
//     console.log(i);
// }
// let sum = 0;
// let num1 = 1
// for(let i = 1; num1 <= 64; i*= 2)
// {
//     num1 += 1;
//     sum += i;
// }
// console.log(sum*0.4);

let xana = 64;
let bugda = 1;
let xanadakiBugda = 1;
let sum = 1;

for(let i = bugda; i <= xana; i ++)
{
    xanadakiBugda = xanadakiBugda * 2;
    sum += xanadakiBugda;
}
console.log(sum * 0.4);