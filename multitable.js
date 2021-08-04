let number=9,n1=0,n2=1,nextTerm;
console.log("fibonnacci series are:");

console.log(n1);
console.log(n2);

while(nextTerm<=number)
{
    nextTerm=n1+n2;
    console.log(nextTerm);
    n1=n2;
    n2=nextTerm;
    
    
    
}