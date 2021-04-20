let num = 153;
let quot;
let sum = 0;
let newNum = num;
while(newNum > 0)
{
let rem = newNum % 10;
quot = Math.floor(newNum/10);
sum += (rem * rem * rem);  //or use cube method
newNum=quot;
}
if(sum == num){
    console.log("It's an armstrong number");
} else {
    console.log("It's not an armstrong number");
}