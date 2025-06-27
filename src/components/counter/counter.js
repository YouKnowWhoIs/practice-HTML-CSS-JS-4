function counter() {
  const btnMinus = document.querySelector(".btn-minus");
  const btnPlus = document.querySelector(".btn-plus");
  const number = document.querySelector(".number");
  const btnReset = document.querySelector(".reset");

  let count = 0;
  number.textContent = count;

  btnMinus.addEventListener("click", () => {
    if (count <= 0) {
      count = 0;
    } else {
      --count;
      number.textContent = count;
    }
  });

  btnPlus.addEventListener("click", () => {
    ++count;
    number.textContent = count;
  });

  btnReset.addEventListener("click", () => {
    count = 0;
    number.textContent = count;
  });
}

counter();
