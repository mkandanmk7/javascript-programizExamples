function sum(num)
{
    //checking given value in greater than 0
    //base class;
    if(num>0)
    {
        //recursive
        return num+sum(num-1);
    }
    else
    {
        //if condition met fails 
        return num;

    }

}
let result=sum(7);
console.log(`sum of natural of 7 is ${result}`);