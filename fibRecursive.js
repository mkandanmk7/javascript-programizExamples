function fibon(number)
{
    if(number<2)
    {
        return number;
    }
    else{
        return fibon(number-1)+fibon(number-2);
    }
}
let result=5;
if(result<0)
{
    console.log("Enter positive NUmber");
}
else
{
    for(let i=0 ;i<result;i++)
    {
        console.log(fibon(i));
    }
}
