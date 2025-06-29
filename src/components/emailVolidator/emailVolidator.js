function emailValidator() {
  const input = document.querySelector(".input-valid");
  const btnValid = document.querySelector(".btn-validate");
  const text = document.querySelector(".validation-text");

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const emailLetter = /[а-яА-ЯіїєґІЇЄҐ]/;

  btnValid.addEventListener("click", () => {
    const value = input.value.trim();

    text.textContent = "";

    if (value === "") {
      input.focus();
      text.textContent = "Поле пусте!";
      text.style.display = "flex";
      text.style.color = "red";
    } else if (!emailPattern.test(value)) {
      input.focus();
      text.textContent = "Не коректний емайл!";
      text.style.display = "flex";
      text.style.color = "red";
    } else if (emailLetter.test(value)) {
      input.focus();
      text.textContent = "Написаний не латиню!";
      text.style.display = "flex";
      text.style.color = "red";
    } else {
      text.textContent = "Емайл написаний добре";
      text.style.display = "flex";
      text.style.color = "green";
    }
  });
}

emailValidator();
