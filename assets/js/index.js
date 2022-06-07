const btn = document.querySelector("#send");

btn.addEventListener("click", (e) => {
  e.preventDefault();

  let numeros = "";

  const quant = document.querySelector("#numbers").value;
  const err = document.querySelector("#err");
  const err1 = err.getElementsByTagName("h2")[0];
  const err2 = err.getElementsByTagName("h2")[1];

  if (quant >= 6 && quant <= 15) {
    for (let i = 1; i <= quant; i++) {
      numeros += `<p>${Math.floor(Math.random() * 60) + 1}</p>`;
    }
  } else if (quant < 6 || quant > 15) {
    err1.classList.remove("hidden");
    setTimeout(() => {
      err1.classList.add("hidden");
    }, 3000);
  } else {
    err2.classList.remove("hidden");
    setTimeout(() => {
      err2.classList.add("hidden");
    }, 3000);
  }

  document.querySelector("#info").innerHTML = numeros;
  document.querySelector("#numbers").value = "";
});
