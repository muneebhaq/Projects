let data = 15;
dataArray = [5,10,20,25,50,39];
let isFound=0;
index = i;

function linearSearch(dataArray,data){
for(i = 0; i< dataArray.length; i++){
    if(dataArray[i] === data){
        isFound= true;
        index = i;
        break;
    }
}
    if(isFound == 15){
        return 'Found in' + index + i + 'there in the array'
        
    } else {
        return "Not Found"
