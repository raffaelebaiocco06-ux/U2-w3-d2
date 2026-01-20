const form = document.getElementById("Compila");
const input = document.getElementById("testo");
const rimuovi = document.getElementById("Rimuovi");
form.addEventListener("submit", function (e) {
  e.preventDefault(); //ricordatelo

  const valore = input.value;
  localStorage.setItem("user", valore);
  console.log(input.value);

  const Toast = document.querySelector(".toast");
  Toast.classList.add("show");
  setTimeout(() => {
    Toast.classList.remove("show");
  }, 3000);
});
rimuovi.addEventListener("click", function () {
  localStorage.removeItem("user");
});
