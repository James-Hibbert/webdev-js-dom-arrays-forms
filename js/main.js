
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
})

document.querySelector(".blue").addEventListener('click', function(ev){
 document.querySelector('body').setAttribute('class', "blueBack");
})

document.querySelector(".green").addEventListener('click', function(ev){
 document.querySelector('body').setAttribute('class', "greenBack");
})
 
document.querySelector(".reset").addEventListener('click', function(ev){
 document.querySelector('body').removeAttribute("class");
})



let imageAr = [
"images/view1.jpg",
"images/view2.jpg",
"images/view3.jpg",
"images/view4.jpg",
"images/view5.jpg",
"images/view6.jpg"
];

let imageCount = 0;

function chgImage(){
    console.info('Called');
    document
    .getElementById("myImages")
    .setAttribute("src", imageAr[imageCount])
    imageCount++
}


setInterval(chgImage, 2000);


})();
