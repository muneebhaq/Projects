var date = new Date();
var hours = date.getHours();
var minutes = date.getMinutes();
var seconds = date.getSeconds();

if(hours < 12){
    console.log("Good Morning!")
}if (hours > 12 && hours<= 16){
    console.log("Good Afternoon")
}else{
    console.log("Hello, How are you?")
}
console.log(hours + ':' + minutes + ':' + seconds);