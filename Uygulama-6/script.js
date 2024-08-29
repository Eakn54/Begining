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

let index = 0;
let imageDom = document.getElementsByClassName("slideImage");
let slideTimer;

document.addEventListener("DOMContentLoaded", function () {
    imageChanger();
    slideTimer = setInterval(imageChanger, 3000);
});

function imageChanger() {
    for (i = 0; i < imageDom.length; i++) {
        imageDom[i].style.display = "none";
    }
    index++;
    if (index > imageDom.length) {
        index = 1;
    }
    imageDom[index - 1].style.display = "block";
}
