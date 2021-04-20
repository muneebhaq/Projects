
    let row = 5;
    let column = 5
    for(let row = 1; row <= 5; row++){
    for(let column =1; column <= row; column++)
        {
        process.stdout.write(row.toString());
        }

    }
    
    for(let row = row; row > 0; row--){
        for(let column =1; column <= row; column++)
        {
        process.stdout.write(column.toString());    
        }
    }
        
    
        

