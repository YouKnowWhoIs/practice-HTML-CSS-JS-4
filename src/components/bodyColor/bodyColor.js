function bodyColor() {
  const btn = document.querySelector(".btn-change");
  const btnReset = document.querySelector(".btn-change-reset");
  const colorName = document.querySelector(".color-name");

  btn.addEventListener("click", () => {
    const newColor = Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0");

    document.body.style.backgroundColor = "#" + newColor;

    colorName.style.display = "flex";
    colorName.textContent = `#${newColor}`;

    btnReset.style.visibility = "visible";
  });

  btnReset.addEventListener("click", () => {
    btnReset.style.visibility = "hidden";
    document.body.style.backgroundColor = "#242424";
    colorName.textContent = "#242424";
  });
}

bodyColor();
