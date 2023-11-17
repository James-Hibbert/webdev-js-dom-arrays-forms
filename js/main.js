
//IIFE
(function(){
    // code starts here
document.getElementById("myHeading").innerHTML = "James"
document.querySelector("nav ul li").setAttribute("class", "currentPage");

document
.querySelector("nav ul li a")
.setAttribute("href", "https://google.co.uk");

document.querySelector(".red").addEventListener('click', function(ev){
 document.querySelector('body').setAttribute('class', "redBack");

document.querySelector(".blue").addEventListener('click', function(ev){
 document.querySelector('body').setAttribute('class', "blueBack");

document.querySelector(".green").addEventListener('click', function(ev){
 document.querySelector('body').setAttribute('class', "greenBack");
 
document.querySelector(".reset").addEventListener('click', function(ev){
 document.querySelector('body').setAttribute("class");


 })
















// silly example
// document
// .querySelector("nav ul li a")
// .setattribute("href", "https://www.google.co.uk");
//  code ends here



})();