// Exercise 4

window.addEventListener("load", () => {
  const button = document.getElementById("btn");
  const input = document.getElementById("input");
  const p = document.getElementById("errorMessage");
  const ul = document.getElementById("tasks");
  button.addEventListener("click", () => {
    if (input.value === "") {
      p.innerHTML = "Please, insert some text";
    } else {
      p.innerHTML = "";
      ul.innerHTML += `<li>${input.value}</li>`;
    }
  });
});
