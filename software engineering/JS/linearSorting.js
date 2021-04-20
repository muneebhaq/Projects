let array = [10,-2,6,-20,7,100];
let temp;
for(i=0; i <=array.length-2; i++){
    for(j= i+1; j<array.length; J++){

        if(array[i] > array[j]){
            temp = array[i]
            array[i] = array[j]
            array[j] = temp
        }
    }
    console.log(array);
}
