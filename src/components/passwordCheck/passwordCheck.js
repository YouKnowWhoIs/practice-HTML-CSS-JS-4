function passwordCheck() {
  const input = document.querySelector(".pass-input");
  const btn = document.querySelector(".pass-btn");
  const error = document.querySelector(".error-text");
  const successful = document.querySelector(".successful-text");

  btn.addEventListener("click", () => {
    const symbolRegex = /[~!@#$%^&*()_\-+=\/{}\[\].,?<>:;]/;

    const value = input.value.trim();
    error.textContent = "";
    error.style.display = "none";
    successful.style.display = "none";

    if (value === "") {
      error.style.display = "flex";
      error.textContent = "Поле пусте!";
      input.focus();
    } else if (value.length < 7) {
      error.style.display = "flex";
      error.textContent = "Пароль меньше 7 символів!";
      input.focus();
    } else if (!symbolRegex.test(value)) {
      error.style.display = "flex";
      error.textContent = "Пароль повинен мати хочаб 1 симбол!";
      input.focus();
    } else {
      error.textContent = "";
      successful.style.display = "flex";
      successful.textContent = "Пароль підходить";
    }
  });
}

passwordCheck();
