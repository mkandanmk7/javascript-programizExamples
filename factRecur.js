function fact(number)
{
    if(number===0)
    {
        return 1;
    }
    else{
        return number*fact(number-1);
    }
    
}
let number=3;
if(number>0)
{
    let result=fact(number);
    console.log(result);
}