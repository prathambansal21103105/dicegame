var randomnumber1=Math.floor((Math.random()*6)+1);
var randomdiceimage="images/dice"+randomnumber1+".png";
var img1=document.querySelectorAll("img")[0];
img1.setAttribute("src",randomdiceimage);

var randomnumber2=Math.floor((Math.random()*6)+1);
var randomdiceimage1="images/dice"+randomnumber2+".png";
var img2=document.querySelectorAll("img")[1];
img2.setAttribute("src",randomdiceimage1);

if(randomnumber1>randomnumber2){
    document.querySelector("h1").innerHTML="🚩 Player1 wins!";
}
else if(randomnumber1<randomnumber2){
    document.querySelector("h1").innerHTML="Player2 wins! 🚩";
}
else{
    document.querySelector("h1").innerHTML="Draw!";
}