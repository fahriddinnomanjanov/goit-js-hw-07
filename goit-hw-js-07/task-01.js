"use strict";

const liCategory = document.querySelectorAll(".item");
console.log(`в списке ${liCategory.length} категории.`);

const struct = document.querySelectorAll(".item");

struct.forEach((tag) => {
  console.log(`Категория: ${tag.querySelector("h2").textContent}`);
  console.log(`Количество элементов: ${tag.querySelectorAll("li").length}`);
});
