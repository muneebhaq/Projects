let statement = "ap";
let vowels = '';
for(let index = 0; index < statement.length; index++){
    let char = statement[index];
    if(char == 'a' || char == 'e' || char == 'i' || char == 'o' || 'u'){
        vowels = vowels.concat(char);
    }
}
console.log(vowels.length);