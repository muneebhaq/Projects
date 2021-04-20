let p = new Promise((resolve, reject)=>{
let sum = 2+2;
if(sum ==4){
    resolve(sum);
}else {
     reject("failed...");
}
})

p.then((value) => {
    console.log("Success...." + value);
    return value;
})
.then((value)=>{
    if(value%2 ==0)
    console.log(value+ " is an even number");
    else
    console.log(value+ " is an odd number");
}).catch((value)=>{
    console.log("Pringting result within 'catch..."+value);
})