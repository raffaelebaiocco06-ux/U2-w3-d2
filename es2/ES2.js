const sezione = document.getElementById("sezione");
const h1 = document.createElement("h1");
sezione.appendChild(h1);
let secondi = 0;
h1.textContent = secondi;
setInterval(() => {
  secondi++;
  sessionStorage.setItem("numero", secondi);
  h1.textContent = secondi;
}, 1000);
