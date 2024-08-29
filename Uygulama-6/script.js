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

const maxİmage = 3;
let i = 0;
let imageDom = document.getElementsByClassName("slideİmage")


document.addEventListener("DOMContentLoaded", imageChanger);

function imageChanger() {
    imageDom[i].style.display = "block";
    i++;
}
if (i < maxİmage) {
    setTimeout(imageChanger, 10000);

}