let lower=8;
let high=500;
console.log(`Armstrong number between ${lower} and ${high}`);
for(let i=lower;i<=high;i++)
{
    let sum=0;
    let no=i.toString().length;
    let temp=i;
    while(temp>0)
    {
        let remind=temp%10;
        sum+=remind**no;
        temp=parseInt(temp/10);
    }
    if(sum==i)
    {
        console.log(i);

    }
    
}