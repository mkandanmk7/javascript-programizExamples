let candies=[2,3,4,5,1];
let extra=3;
let maxi=0;
for(let i=0;i<candies.length;i++)
{
    maxi=Math.max(maxi,candies[i]);
}
//found maximum value of cadndies
let add=[];
for(let i=0;i<candies.length;i++)
{
    let sum=candies[i]+extra;
    let t=true,f=false;
    if(sum>=maxi)
    {
        add.push(t);
    }
    else
    {
        add.push(f);
    }

}
console.log(add);