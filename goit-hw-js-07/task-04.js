"use strict";

const forValue = document.querySelector("#value");
const counterIncrement = document.querySelector(
  'button[data-action="increment"]'
);
const counterDecrement = document.querySelector(
  'button[data-action="decrement"]'
);

let counterIncDecr = 0;

const Decrement = function () {
  counterIncDecr -= 1;
  forValue.textContent = counterIncDecr;
};

const Increment = function () {
  counterIncDecr += 1;
  forValue.textContent = counterIncDecr;
};

counterDecrement.addEventListener("click", Decrement);
counterIncrement.addEventListener("click", Increment);
