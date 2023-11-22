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

/* per aggiungere i <li> avrei potuto anche creare un elemento 
   direttamente in JS (document.createElement) e poi aggiungerlo 
   all'ul con appendChild() -> ul.appendChild(li);
   ma in questo caso mi sembrava piu veloce modificare il suo HTML 
   direttamente coi backtick.

   Volendo si poteva anche svuotare l'input, facendo -> input.value = '';
*/