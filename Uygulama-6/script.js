/* şube sayacı start*/

let counterDOM = document.getElementById("counter");
let counterValue = 0;

document.addEventListener("DOMContentLoaded", updateCounter);

function updateCounter() {
    counterDOM.textContent = counterValue;
    counterValue++;
    if (counterValue < 277) {
        setTimeout(updateCounter, 10);
    }
}

/* şube sayacı end */

/* slider start */

let index = 0;
let imageDom = document.getElementsByClassName("slideImage");
let slideTimer;

document.addEventListener("DOMContentLoaded", function () {
    OtoImageChanger();
    slideTimer = setInterval(OtoImageChanger, 3000);
});

function OtoImageChanger() {
    for (let i = 0; i < imageDom.length; i++) {
        imageDom[i].style.display = "none";
    }
    index++;
    if (index > imageDom.length) {
        index = 1;
    }
    imageDom[index - 1].style.display = "block";
}

function plusSlides(n){
    clearInterval(slideTimer);
   index +=n;
   if (index > imageDom.length) {
    index = 1;
} else if(index < 1){
index = imageDom.length;
}
for (let i = 0; i < imageDom.length; i++) {
    imageDom[i].style.display = "none";
}
imageDom[index - 1].style.display = "block";
slideTimer=setInterval(OtoImageChanger, 3000);
}

/* slider end */
