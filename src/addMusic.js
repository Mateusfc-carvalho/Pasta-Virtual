const title = document.querySelector("#title");
const singerName = document.querySelector("#singer");
const songNUmber = document.querySelector("#songNumber");
const letterFormated = document.querySelector("#letterFormated");
const btnAdd = document.querySelector("#addMusic");

btnAdd.addEventListener("click", (event) => {
  event.preventDefault();

  const existingMessage = document.querySelector('.errorMessage');
  if (existingMessage) existingMessage.remove();

  const isEmpty = [...document.querySelectorAll('input')]
    .some((input) => input.value.trim() === "");

  if (isEmpty) {
    const errorMessage = document.createElement('div');
    errorMessage.textContent = "Digite as informações requisitadas nos campos.";
    errorMessage.classList.add('errorMessage');
    document.body.appendChild(errorMessage);
    setTimeout(() => { errorMessage.remove() }, 3000);
    return;
  }

  const values = [{
    title: title.value.trim(),
    singerName: singerName.value.trim(),
    songNUmber: songNUmber.value.trim(),
    letterFormated: letterFormated.value.trim(),
  }];

  localStorage.setItem("music", JSON.stringify(values)); // ✅
});
