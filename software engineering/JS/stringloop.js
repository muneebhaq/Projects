/*let fname = 'John Oliver';
let lname = ' Smith';
lname.indexOf('h');
fname.lastIndexOf('e');
fname.concat(lname);
fname.indexOf('0');
*/

/*
for(x = 0; x < string.length; x++){
    console.log(string[x]);
}*/

/*
let project = "Working on String loop";
for(x=0; x < project.toLowerCase(); x++){
   console.log(project[x]);
}
*/

/*
for(x = 0; x < string.toUpperCase(); x++){
    console.log(string[x]);
}

let project = "Working on String loop.";
console.log(project.toLowerCase());
console.log(project.toUpperCase());
console.log('Hello '.concat(project));
console.log(project.indexOf('i'));
console.log(project.lastIndexOf('o'));
console.log(project.charAt(4));
console.log(project.slice(4,10));


story = "This is a longer version of the story. This is contracted version out of the story.";
console.log(story.slice(39).toUpperCase().concat(" ").concat(project));*/

str = "  john smith  "
console.log(str.trim());

sentence = "Houses located on cliffs tend to have a sceninc view. Houses on ground level tend to increase in value more than houses located on cliffs";
console.log(sentence.replaceAll("House", "apartments"));
console.log(sentence.includes("Houses"));


message = "I like hot coffee but prefer cold in the summer over hot";
console.log(message.padStart(60,1));
console.log(message.padEnd(60,1));

message2 = "checking if global method of replace all method works";


