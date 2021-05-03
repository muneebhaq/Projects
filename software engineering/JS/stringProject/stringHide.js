//This application is designed to hide part of clients email add 
protectEmail = function (clientEmail){
    //declaring variables
    var average, splitted, part1, part2;
    //splitting string at @
    splitted = clientEmail.split("@");
    //dividing string into 2
    part1 = splitted[0];
    average = part1.length / 2;
    //substracting the other half of the string
    part1 = part1.substring(0,(part1.length - average));
    //setting starting point of string 2
    part2 = splitted[1];
    //print first part plus a string where the string is hidden + second part of the string after @
    return part1 + "******@" + part2;
}
console.log(protectEmail("jacobsmith@gmail.com"))