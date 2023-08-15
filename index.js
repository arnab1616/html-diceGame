
var num1 = Math.random();
var num2 = Math.random();

num1 = Math.floor(1 + num1*6);
var dicenumber1= "./images/dice"+num1+".png";

num2 = Math.floor(1 + num2*6);
var dicenumber2= "./images/dice"+num2+".png";

document.querySelector(".container .dice .img1").setAttribute("src", dicenumber1);
document.querySelector(".container .dice .img2").setAttribute("src", dicenumber2);

if(num1===num2){
    document.querySelector(".container h1").innerHTML = "Draw!";
}
else if(num1>num2){
    document.querySelector(".container h1").style.fontSize = "6.8rem"  ;
    document.querySelector(".container h1").innerHTML = "🚩 Player 1 wins!";
}
else{
    document.querySelector(".container h1").style.fontSize = "6.8rem";
    document.querySelector(".container h1").innerHTML = "Player 2 wins! 🚩" ;
}