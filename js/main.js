"use strict";

const numberInput = document.querySelector(".js-number-input");
const submitButton = document.querySelector(".js-submit");
const hint = document.querySelector(".js-hint");
const chances = document.querySelector(".js-chances");



function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}
const randomNumber = getRandomNumber(100);
console.log(randomNumber);


function handleClick(ev) {
    ev.preventDefault();
    const input = numberInput.value;
    if (input == randomNumber) {
        hint.innerHTML = "¡Has ganado!";
    } else if (input < randomNumber) {
        hint.innerHTML = "Demasiado bajo";
    } else if (input > randomNumber) {
        hint.innerHTML = "Demasiado alto";
    }
    if (input > 100) {
        hint.innerHTML = "El número debe estar entre 1 y 100";
    } else if (input < 1) {
        hint.innerHTML = "El número debe estar entre 1 y 100";
    }

}

// for (let i = 0; i = handleClick; i++) {
//     chances.innerHTML += "Número de intentos: ${[i]}"
//     console.log("a ver si sale algo");
// }


submitButton.addEventListener("click", handleClick);