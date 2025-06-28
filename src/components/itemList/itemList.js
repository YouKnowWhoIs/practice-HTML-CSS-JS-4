function items() {
  const input = document.querySelector(".control-panel input");
  const btnAdd = document.querySelector(".control-panel button");
  const itemsList = document.querySelector(".items-list");
  const error = document.querySelector(".error-panel-text");

  btnAdd.addEventListener("click", () => {
    if (input.value.trim() === "") {
      error.style.display = "flex";
    } else {
      error.style.display = "none";

      const li = document.createElement("li");
      const p = document.createElement("p");
      const button = document.createElement("button");

      p.textContent = `${input.value}`;
      button.textContent = `Видалити`;

      button.classList.add("btn-remove");

      itemsList.appendChild(li);
      li.appendChild(p);
      li.appendChild(button);
    }

    input.value = "";
  });

  itemsList.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-remove")) {
      let closestLi = e.target.closest("li");
      closestLi.remove();
    }
  });
}

items();
