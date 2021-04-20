let value = 1
let numRow = 5
let numcolumn = 5
/*for(let row = 1; row <= numRow; row++){
    for(let column = 1; column <= row; column++){
        process.stdout.write(row.toString());
    }
    console.log();
}*/
    
    for(let row = 5; row > 0; row--){
        for(let column =5; column <= row; column++)
        {
        process.stdout.write(column.toString());    
        }
        console.log();
    }
        