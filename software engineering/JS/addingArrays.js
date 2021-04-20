array1 = [1,2,3,4,5]
array2 = [5,6,7,8,0]
array3 = []
//if both lengths are the same only requires one loop
for(i =0; i < array1.length; i++)
{
    /*using push method to push array1,array2
    into array3 and adding them*/
    array3.push(array1[i] + array2[i]);
}
console.log(array3);
array3.pop();
console.log(array3.length);
console.log(array3.reverse());
console.log(array3.sort());
console.log(array3.sort().reverse());
