/*for(counter = 1; counter <= 50; counter++)
if(counter % 3 == 0 && counter % 5 == 0){
    console.log(counter + " fizzbuzz")}

else if(counter % 3 == 0){
        console.log("fizz")
    }
else if(counter % 5 == 0){
    console.log("Buzz")
}*/
let counter = 1;
while(counter <=50){
    if(counter % 3 == 0 && counter % 5 == 0){
        console.log(counter + " fizzbuzz")}
    
    else if(counter % 3 == 0)
            console.log("fizz")
        
    else if(counter % 5 == 0)
        console.log("Buzz")
        counter++;
    }
