function formateTime(unti) {
  return unti < 10 ? "0" + unti : unti;
}

function date() {
  const time = document.querySelector(".time");

  const now = new Date();

  const hours = formateTime(now.getHours());
  const minutes = formateTime(now.getMinutes());
  const seconds = formateTime(now.getSeconds());

  time.textContent = `${hours} : ${minutes} : ${seconds}`;
}

date();

setInterval(date, 1000);
