let num=4;
let a;
let isPrime = false;

for(a =2; a <= num; a++){
    for(a =2; a<= num; a+=2)
    
    if(num % a === 0){
        isPrime = true;
        break;
    }
    if(isPrime){
        console.log(num + ' is prime');
        
    } else{
        console.log(num + ' is not prime');
    }
}