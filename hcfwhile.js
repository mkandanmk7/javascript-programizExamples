let num1=50,num2=12;
//checking eqaul or not;
while(num1!=num2)
{//if num1 and num2 equal exit looping

    //which num is greater minus with other
    if(num1>num2)
    {
        //num1 is greater so minus with num2;
        num1=num1-num2;

    }
    else
    {
        num2=num2-num1;
    }
}
console.log(`highest common factor is ${num1}`);