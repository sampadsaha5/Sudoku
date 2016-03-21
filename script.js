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
    for(i=1; i<=9; i++){
        for(j=1; j<=9; j++){
            document.getElementById('answerdabba').innerHTML = document.getElementById('answerdabba').innerHTML + '<div id="ans' + i + '' + j + '"></div>';
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
function levelChanged(){
    if( document.getElementById('selectinput').value == 'Hard' ){
        level = 3;
    }else if( document.getElementById('selectinput').value == 'Medium' ){
        level = 2;
    }else if( document.getElementById('selectinput').value == 'Easy' ){
        level = 1;
    }
    generate(level);
}
function generate(level){
    populate();
    randomize();
    fillAnswer();
    makeGame(level);
}
function makeGame(level){
    var c = false;
    var r = false;
    if(level == 1){
        deleter(0,40);
    }
    if(level == 2){
        deleter(0,47);
    }
    if(level == 3){
        deleter(0,54);
    }
    function deleter(a,t){
        if(a == t){
            return false;
        }else{
            c = parseInt(Math.random()*9+1);
            r = parseInt(Math.random()*9+1);
            if(document.getElementById('puz'+r+''+c).innerHTML != ''){
                document.getElementById('puz'+r+''+c).innerHTML = '';
                document.getElementById('puz'+r+''+c).style.color = 'blue';                
                deleter(a+1,t);
            }else deleter(a,t);
        }
    }
}
function fillAnswer(){
    var i=false;
    var j=false;
    for(i=1; i<=9; i++ ){
        for(j=1; j<=9; j++ ){
            document.getElementById('ans'+i+''+j).innerHTML = sudoku[i-1][j-1];
            document.getElementById('puz'+i+''+j).innerHTML = sudoku[i-1][j-1];
            document.getElementById('puz'+i+''+j).style.color = "black";
        }
    }
}
function randomize(){
    var numg = false;
    var colg = false;
    var rowg = false;
    var h_or_v = false;
    var temp;
    for(var n=0; n<no_of_times; n++){
        h_or_v = parseInt(Math.random()*2+1);
        if(h_or_v == 1){
            colg = parseInt(Math.random()*3+1);
            numg = parseInt(Math.random()*2+1);
            if(colg == 1){
                numg = numg + 0;
            }
            if(colg == 2){
                numg = numg + 3;
            }
            if(colg == 3){
                numg = numg + 6;
            }
            for(var te=1; te<=9; te++){
                temp = sudoku[te-1][numg-1];
                sudoku[te-1][numg-1] = sudoku[te-1][numg];
                sudoku[te-1][numg] = temp;
            }
        }
        if(h_or_v == 2){
            rowg = parseInt(Math.random()*3+1);
            numg = parseInt(Math.random()*2+1);
            if(rowg == 1){
                numg = numg + 0;
            }
            if(rowg == 2){
                numg = numg + 3;
            }
            if(rowg == 3){
                numg = numg + 6;
            }
            for(var te=1; te<=9; te++){
                temp = sudoku[numg-1][te-1];
                sudoku[numg-1][te-1] = sudoku[numg][te-1];
                sudoku[numg][te-1] = temp;
            }
        }
    }
}
function populate(){
    var i=0, j=0;
    var startpoint = false;
    var count = false;
    var ip = false;
    for(j=1; j<=9; j++){
        if((j/3) <= 1 && (j/3) > 0 ){
            startpoint = 1+(j-1)*3;
        }
        if((j/3) <= 2 && (j/3) > 1 ){
            startpoint = 2+(j-1)*3;
        }
        if((j/3) <= 3 && (j/3) > 2 ){
            startpoint = 3+(j-1)*3;
        }
        count = 1;
        for(i=startpoint; i<=(startpoint+8); i++) {
            if( i-9*parseInt(i/9) == 0){
                ip = 9;
            }else ip = i-9*parseInt(i/9);
            sudoku[ip-1][j-1] = count;
            count++;
        }
    }
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