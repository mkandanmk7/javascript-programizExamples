let sum=0;
let userInput=163;

const noOfDigits=userInput.toString().length;
console.log(noOfDigits);
let temp=userInput;
while(temp>0)
{
    reminder=temp%10;
    sum+=reminder**noOfDigits;
    temp=parseInt(temp/10);

}
if(sum==temp)
{
    console.log(`${userInput} is armstrong`);
    console.log(sum);
}
else
 console.log("not armstrong");
 console.log(sum);




 // program to check an Armstrong number of n digits

// take an input
