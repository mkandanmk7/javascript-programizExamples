let number=0;
fact=1;
if(number<0)
{
    console.log(`${number} is negative number`);

}
else if(number===0)
{
    console.log(`factorial of ${number} is 1`);

}
else{
    
    for(let i=1;i<=number;i++)
    {
        fact*=i;
    }
    console.log(`factorial of given number ${number} is ${fact}`);
}
