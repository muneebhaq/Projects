let city = "New York"
let weather = "cold"
let userInput = "   if you like cold weather than you should move to New York";
let store = ""
for(let i = 0; i < userInput.length; i++){
    store = store + userInput[i].toUpperCase()
    
    
}
let store1 = userInput.replace("New York",("Chicago"))
let store2 = store.concat(" else, stay in Florida enjoy the warm weather")
let store3 = store.trim();
console.log(store1);
console.log(store2);
console.log(store3);


