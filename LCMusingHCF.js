//find hcf highest common factor!
let num1=45,num2=56,hcf;
let mul=num1*num2;
let first=num1,second=num2;
//using for loops:


/*for(let i=0;i<num1 &&i<num2;i++)
{
    if(num1%i==0 && num2%i==0)
    {
        hcf=i;
    }
}*/


// using while loop is easy 
//comparing num1 and num 2 to find hcf;
//not equal go to loop;

while(num1!=num2)
{
    if(num1>num2)
    {
        //decrement;
        num1-=num2;

    }
    else{
        num2-=num1;

    }
}
hcf=num1;
let lcm=mul /hcf;
console.log(`LCM of ${first} and ${second} is ${lcm}`); 