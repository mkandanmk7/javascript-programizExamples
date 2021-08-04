//get input
let num1=6,num2=8;
//find max value of given number, and assign to min variable;
let min=(num1>num2)?num1:num2;

while(true)
{
if(min%num1==0 && min%num2==0)
{
    //condition true output;
    console.log(`LCM of ${num1} and ${num2} is ${min}`);
    break;
    //break the while loop after getting output
    
}
min++;
}