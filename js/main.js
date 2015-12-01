/*=========================
    HOME
===========================*/

//VARIABLES

var home_slider = document.getElementById("slider");
var home_title = document.getElementById("home_title");
var timer;

//functions

timer = setTimeout(homeChanges, 2500);

function homeChanges () {
    home_slider.style.transition = "all 1s"
    home_title.style.transition = "all 1s"
    home_slider.style.background = "green";
    home_title.style.padding = "15px";
    home_title.innerHTML = "Capturing Nature";
    home_title.style.fontSize = "250%";
    clearTimeout(timer);
}

/*=========================
    GALLERY
===========================*/
//variables
//var gallery_section = document.getElementById("gallery")
//var thumbnail_img = gallery_section.getElementsByTagName("href");

var big_box = document.getElementById("big_box");
var gallery1 = document.getElementById("gallery1");
var gallery2 = document.getElementById("gallery2");
var gallery3 = document.getElementById("gallery3");
var gallery4 = document.getElementById("gallery4");
var gallery5 = document.getElementById("gallery5");
var gallery6 = document.getElementById("gallery6");

//functions

gallery1.onmouseover = function () {
big_box.src = "images/blue_dress.jpg";
}

gallery2.onmouseover = function () {
big_box.src = "images/boxer.jpg";
}

gallery3.onmouseover = function () {
big_box.src = "images/country_boy_relaxing.jpg";
}

gallery4.onmouseover = function () {
big_box.src = "images/eye.jpg";
}

gallery5.onmouseover = function () {
big_box.src = "images/ice_swim.jpg";
}

gallery6.onmouseover = function () {
big_box.src = "images/sitting.jpg";
}

//thumbnail_img.onmouseover = function () {
//    big_box.src = "img/eye.jpg"
//}



