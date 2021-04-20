/*


7. Write a function findLongestWord that takes an array of words and returns the length of the longest one.
8. Write a function filterLongWords that takes an array of words and a number i and returns the array of words that are longer than i characters long.*/

//1. Define a function maxOfTwoNumbers that takes two numbers as 
//arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
// Do some googling to figure this out if you forget how conditionals work.
/*maxOfTwoNumbers(142,234);
function maxOfTwoNumbers(num1, num2){
  
    if (num1 > num2) {
       console.log(num1 + " is greater than " + num2);
    } else {
        console.log(num1 + " is less than " + num2);
    }
    return;
  
}

//2. Define a function maxOfThree that takes three numbers as arguments 
//and returns the largest of them.
maxOfThree (334,345,998);
function maxOfThree(num1, num2, num3){
if(num1 >= num2 && num1>= num3){
    return num1;
}else if(num2 >= num1 && num2 >= num3){
    return num2;
}else
    return num3;
}
console.log(maxOfThree(334,345,998+ " is the largest of three numbers"));

//another way
function maxOfThree2(num1,num2,num3){
    let max = Math.max(num1,num2,num3);
    return max;
}
console.log(maxOfThree2(100,345,453));

//3. Write a function isCharacterAVowel that takes a character
//(i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
var isVowel = function (isCharacterAVowel){
    var vowels = ["a","e","i","o","u"];
    for(var i = 0; i < vowels.length; i++){
        if(isCharacterAVowel === vowels[i])
        return true;
    }
    return false;
} 
console.log(isVowel("p"));
console.log(isVowel("a"));
console.log(isVowel("a") + " a is a vowel.");
console.log(isVowel("p") + " p is not a vowel.");


//4. Define a function sumArray and a function multiplyArray that sums and multiplies 
//(respectively) all the numbers in an array of numbers. 
//For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.
function sum(){
    var total = 0;
    for(var i = 0; i < arguments.length; i++){
        total += arguments[i];
    }
    return total;
}
console.log(sum(1,2,3,4));

function multiple(){
    var total = 1;
    for(var i = 0; i < arguments.length; i++){
        total = (total * arguments[i]);
    }
        return total;
}

console.log(multiple(5,6,7,8));

//5. Write a function that returns the number of arguments 
//passed to the function when called.
function count(){
    var total = 0;
    for(var i = 0; i < arguments.length +1; i++){
        total = arguments+[i];
    }
    return total;
}
console.log(count(1,2,3,4,5,6,7,8,9,10));

//6.Define a function reverseString that computes the reversal of a string. 
//For example, reverseString("jag testar") 
//should return the string "ratset gaj".
var new_str = ""
function reverse(string) {
  for (var i = string.length - 1; i >= 0; i--) {
    new_str += string[i];
  }
  return new_str;
}

console.log(reverse('jag testar'));
*/
function findLongestWord(str) {
    var strSplit = str.split(' ');
    var longestWord = 0;
    for(var i = 0; i < strSplit.length; i++){
        if(strSplit[i].length > longestWord){
            longestWord = strSplit[i].length;
        }
    }
    return longestWord;
}
findLongestWord("The quick brown fox jumped over the lazy dog");
console.log(findLongestWord(str));