function fact(number)
{
    if(number==0)
    {
        return 1;

    }
    else
    {
        return number*fact(number-1);
    }
}
let result=fact(4);
console.log(`factorial of  4 is ${result}`);