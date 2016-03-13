var docHeight = window.innerHeight;
var level = 1;
var no_of_times = 50;
var sudoku = new Array(9);
for(var i=0; i<=8; i++){
    sudoku[i] = new Array(9);
}
function trigger(){
    setWidthAndHeight();
    appender();
}
function setWidthAndHeight(){
    document.getElementById('container').style.height = docHeight + "px";
    document.getElementById('centrallayer').style.height = docHeight - 115 + 'px';
}











function checkAnswers(){
    var i = false;
    var j = false;
    var corrects = 0;
    for(i=1; i<=9; i++){
        for(j=1; j<=9; j++){
            if(document.getElementById('puz'+i+''+j).innerHTML == sudoku[i-1][j-1]) corrects ++;
        }
    }
    if(corrects == 81){
        document.getElementById('goodbox').innerHTML = 'You did it !!';
        alert('You did it !!');
    }
}