let previous = 0;
let current = 1;
let answer;
//answer = pre + current;
console.log(previous);
console.log(current);

for(let fib = 1; fib <= 10; fib++){
    answer = previous + current;
    console.log(answer);
    previous = current;
    current = answer;
}



//0, 1, 1, 2, 3, 5, 8, 13, 21, 34
