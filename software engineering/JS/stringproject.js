let city = "New York"
let weather = "cold"
let userInput = "   if you like cold weather than you should move to New York";
let store = ""
for(let counter = 0; counter < userInput.length; counter++){
    store = store + userInput[counter].toUpperCase()
}
let store1 = store.replace("New York",("Chicago"))
console.log("  " + store1.trim());