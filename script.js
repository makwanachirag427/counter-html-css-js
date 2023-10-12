const incrementBtn = document.querySelector(".increment-btn");
const decrementBtn = document.querySelector(".decrement-btn");
const resetBtn = document.querySelector(".reset");
const count = document.querySelector(".count");
let counter = 0;

decrementBtn.addEventListener("click", () => {
  counter--;
  if (counter <= 0) {
    counter = 0;
  }
  count.textContent = counter;
});
incrementBtn.addEventListener("click", () => {
  counter++;
  count.textContent = counter;
});

resetBtn.addEventListener("click", () => {
  counter = 0;
  count.textContent = counter;
});
