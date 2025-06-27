function calculate() {
  const input = document.querySelector(".input");
  const result = document.querySelector(".result");
  const itemSymbol = document.querySelectorAll(".item-symbol");

  input.setAttribute("readonly", true);

  itemSymbol.forEach((btn) =>
    btn.addEventListener("click", () => {
      const lastChar = input.value.slice(-1);
      const signs = "-+=/";

      if (btn.textContent === "=") {
        try {
          const resultNum = eval(input.value);
          result.textContent = resultNum;

          input.value = "";
        } catch {
          result.textContent = "Помилка!";
          input.value = "";
        }
      } else if (btn.textContent === "C") {
        input.value = "";
      } else {
        if (signs.includes(lastChar) && signs.includes(btn.textContent)) {
          input.value = input.value.slice(0, -1) + btn.textContent;
        } else {
          input.value += btn.textContent;
        }
      }
    })
  );
}

calculate();
