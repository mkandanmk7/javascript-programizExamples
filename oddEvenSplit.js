let userInput=['53364'];
//spliting array vaule  string to number ;
let getInput=userInput[0].split('').map(Number);;
console.log(getInput);
let even=[],odd=[];
for(let i=0;i<=getInput.length;i++)
{
    if(getInput[i]%2==0)
    {
        even.push(getInput[i]);
    }
    else
    {
        odd.push(getInput[i]);

    }
}
console.log(even.sort().join(" "));
console.log(odd.sort().join(" "));
