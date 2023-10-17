// constants for query selector

const studentId = document.querySelector("#myStudentId");
const body = document.querySelector('body');
const randBtn = document.querySelector(".randColor");
const customBtn = document.querySelector(".custColor");
const imageSelect = document.getElementById("imageSelect");
const images = document.getElementById("images"); 
addList();
// function to change bg color from user input and add student id
function changeCustomColor() {
    // get the value from the selector
    const inputValue = parseInt(document.getElementById("customNumber").value);

    // check the value of the selected number and make the background the color it need to be
    if (inputValue < 0 || inputValue > 100) {
        body.style.backgroundColor = 'red';
    } else if (inputValue >= 0 && inputValue < 20) {
        body.style.backgroundColor = 'green';
    } else if (inputValue >= 20 && inputValue < 40) {
        body.style.backgroundColor = 'blue';
    } else if (inputValue >= 40 && inputValue < 60) {
        body.style.backgroundColor = 'orange';
    } else if (inputValue >= 60 && inputValue < 80) {
        body.style.backgroundColor = 'purple';
    } else if (inputValue >= 80 && inputValue <= 100) {
        body.style.backgroundColor = 'yellow';
    }
    studentId.textContent = "Dmitrii Demin ID: 200464709";
}

// function to change bg color from random no.
function changeRandomColor() {
    // generate random number and make the background the color it need to be
    var random = Math.floor(Math.random()*100);
    if (random < 0 || random > 100) {
        body.style.backgroundColor = 'red';
    } else if (random >= 0 && random < 20) {
        body.style.backgroundColor = 'green';
    } else if (random >= 20 && random < 40) {
        body.style.backgroundColor = 'blue';
    } else if (random >= 40 && random < 60) {
        body.style.backgroundColor = 'orange';
    } else if (random >= 60 && random < 80) {
        body.style.backgroundColor = 'purple';
    } else if (random >= 80 && random <= 100) {
        body.style.backgroundColor = 'yellow';
    }
}

// function to generate options for select list
function addList() {
    // Tip: you might have to check length condition so that the list does not keep growing when clicked
    // Tip: use createElement and appendChild inside every for loop to add elements to select list from array 
    const imageSources = ["img/img1.jpg", "img/img2.jpg", "img/img3.jpg", "img/img4.jpg", "img/img5.jpg"];
    for (let i = 0; i<imageSources.length; i++){
        const option = document.createElement("option");
            option.value = imageSources[i];
            option.textContent = `Image ${i + 1}`;
            imageSelect.appendChild(option);
    }
}

// function to change image
function changeImage() {
images.src = imageSelect.value;
}

// event listeners for on click event of buttons and select
document.addEventListener("DOMContentLoaded", function() {
    customBtn.addEventListener("click", changeCustomColor);
    randBtn.addEventListener("click", changeRandomColor);
    imageSelect.addEventListener("change", changeImage);
    });
// event listeners for on change event of select