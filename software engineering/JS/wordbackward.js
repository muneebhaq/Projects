let originalWord = "racecar";
let backwardsword = '';
let wordlength = originalWord.length -1;

for(wordlength; wordlength >= 0; wordlength--){
    backwardsword += originalWord.charAt(wordlength)
}
if(originalWord == backwardsWord){
    console.log(originalWord + " is a palindrome")
} else{
    console.log(originalWord + " is not a palindrome")
}