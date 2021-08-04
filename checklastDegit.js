let a=15,b=35,c=94;
let result1=a%10;
let result2=b%10;
let result3=c%10;
if(result1==result2 && result1==result3)
{
    console.log(`same last degits in ${a},${b},${c}`);

}
else
console.log("not same ",a ,b, c);