i =2;
for(var i=2; i<=5 ;i++){

        var isPrime = true;

        for(var j=2; j<i; j++){
            if(i%j === 0 && i !== j){
                isPrime = false;
                console.log(i + ' is not prime')
                break;
            }
        }
        if(isPrime === true){
            console.log(i + ' is prime');
            break;
        }
    }