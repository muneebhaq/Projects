var score=51;
var grade;
if(score>=41 && score<=51){
    grade="F";
    
}else if(score>=51 && score<=61){
    grade="D";
    
}else if(score>=61 && score<=71){
    grade="C";
    
}else if(score>=71 && score<=81){
            grade="B";
            
}else if(score>=81 && score<=91){
            grade="A"
            
}else{
            grade="You've earned an A+, Good Job!";
            
        }
        console.log(grade);