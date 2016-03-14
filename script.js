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
function pardagirao(){

	if(document.getElementById('parda').style.visibility == 'hidden'){
        document.getElementById('parda').style.visibility = 'visible';
        document.getElementById('goodbox').innerHTML = '';
    }else document.getElementById('parda').style.visibility = 'hidden';
    if(document.getElementById('iloose').innerHTML == 'Show answer'){
        document.getElementById('iloose').innerHTML = 'Hide answer';
        document.getElementById('goodbox').innerHTML = 'Cheater !!!';
    }else{
        document.getElementById('iloose').innerHTML = 'Show answer';
        document.getElementById('goodbox').innerHTML = '';
    }

}
function appender(){
    var i=0, j=0;
    for(i=1; i<=9; i++){
        for(j=1; j<=9; j++){
            document.getElementById('leftcolumn').innerHTML = document.getElementById('leftcolumn').innerHTML + '<div id="puz' + i + '' + j + '" contenteditable="true" onkeyup="checkAnswers();"></div>';
        }
    }
    
    for(j=3; j<=6; j = j+3 ){
        for(i=1; i<=9; i++){
            document.getElementById('puz' + i + '' + j).style.borderRight = '3px solid blue';
        }
    }
    for(j=3; j<=6; j = j+3 ){
        for(i=1; i<=9; i++){
            document.getElementById('puz' + j + '' + i).style.borderBottom = '2px solid blue';
        }
    }
    generate(level);
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
