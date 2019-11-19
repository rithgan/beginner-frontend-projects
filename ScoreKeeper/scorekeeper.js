var p1btn = document.getElementById("p1");
var p2btn = document.getElementById("p2");
var resetbtn = document.getElementById("reset");
var p1display = document.getElementById("p1display");
var p2display = document.getElementById("p2display");
var p1score=0;
var p2score=0;
var number = document.querySelector(".number");
var numdisplay = document.querySelector("#numdisplay");
var gamenum = 5;
var gameover=false;
var winnigscore=5;

p1btn.addEventListener("click", function(){
    if(!gameover){
        p1score++;
        if(p1score===winnigscore){
            p1display.classList.add("winner");
            gameover=true;
        }
    }
    p1display.textContent = p1score;
});

p2btn.addEventListener("click", function(){
    if(!gameover){
        p2score++;
        if(p2score===winnigscore){
            p2display.classList.add("winner");
            gameover=true;
        }
    }
    p2display.textContent = p2score;
});

resetbtn.addEventListener("click",function(){
    reset();
});

function reset(){
    p1score = 0;
    p2score = 0;
    p1display.textContent = 0;
    p2display.textContent = 0;
    p1display.classList.remove("winner");
    p2display.classList.remove("winner");
    gameover = false;
}

number.addEventListener("change",function(){
   numdisplay.textContent = number.value;
   winnigscore=Number(number.value); //we are converting string to number
   reset();
});






