var randomNumber1=Math.floor((Math.random()*6+1));

function selectDice1(){
  if (randomNumber1===1){
    return "images/dice1.png";
  }
  else if (randomNumber1===2){
    return "images/dice2.png";
  }
  else if (randomNumber1===3){
    return "images/dice3.png";
  }
  else if (randomNumber1===4){
    return "images/dice4.png";
  }
  else if (randomNumber1===5){
    return "images/dice5.png";
  }
  else {
    return "images/dice6.png";
  }
}
var randomNumber2=Math.floor((Math.random()*6+1));

function selectDice2(){
  if (randomNumber2===1){
    return "images/dice1.png";
  }
  else if (randomNumber2===2){
    return "images/dice2.png";
  }
  else if (randomNumber2===3){
    return "images/dice3.png";
  }
  else if (randomNumber2===4){
    return "images/dice4.png";
  }
  else if (randomNumber2===5){
    return "images/dice5.png";
  }
  else {
    return "images/dice6.png";
  }
}
document.querySelector("div div .img1").setAttribute("src", selectDice1());
document.querySelector("div div .img2").setAttribute("src", selectDice2());

if (randomNumber1===randomNumber2){
  document.querySelector("div h1").innerHTML="Draw"
}
else if (randomNumber1>randomNumber2){
  document.querySelector("div h1").innerHTML="Player 1 wins"

}
else {
  document.querySelector("div h1").innerHTML="Player 2 wins"

}
