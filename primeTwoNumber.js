let L = 3;
let R = 10;
let sum = 0;
for (let i = L; i <= R; i++)
//loop upto highest value;
{
    flag = 0;
    //set flag=0;
    //another for nested loop for divible or not;
    for (let j = 2; j < i; j++) {
        //check i is divisble by j iteration;
        if (i % j == 0) {
            //set flag=1; then break then increase j value;
            flag = 1;
            break;

        }

    }
    if (i > 1 && flag == 0) {
        console.log(i);
        sum++;

    }
}
console.log(sum);