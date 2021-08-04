let small=2,big=10;
for(let i=small;i<=big;i++)
{
    flag=0;
    for(let j=2;j<i;j++)
    {
        if(i%j==0)
        {
            flag=1;
            break
        }
    }
    if(i>1 && flag==0)
    {
        console.log(i);
    }
}