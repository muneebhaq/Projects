let x = () => console.log("a message from function x");

let y = (n1, n2, callback) => {
    callback();
    console.log("Numbers printed from function y: " + n1 + " " + n2 );
}

y (10,20, x);
y (10,20, () => console.log(2+3))

/*myFunction = function(){
    let a,b;
    a=10;
    b=20;
    return a+b;
}
console.log(myFunction());*/