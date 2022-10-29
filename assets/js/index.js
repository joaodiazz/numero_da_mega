const btn = document.querySelector("#send");

const sorteia = () => {
  return Math.floor(Math.random() * 60) + 1;
};

function apagaNumInput() {
  return (document.querySelector("#numbers").value = "");
}

function apagarArr() {
  return (document.querySelector("#info").innerHTML = "");
}

const numSorteado = () => {
  const quant = document.querySelector("#numbers").value;
  const err = document.querySelector("#err");
  const err1 = err.getElementsByTagName("h2")[0];
  const err2 = err.getElementsByTagName("h2")[1];

  let arr = [];
  let num = 1;

  if (quant >= 6 && quant <= 15) {
    while (num <= quant) {
      let numAleatorio = sorteia();
      let identico = false;

      if (numAleatorio !== 0 && numAleatorio <= 60) {
        for (let i = 0; i < arr.length; i++) {
          if (arr[i] == numAleatorio) {
            identico = true;
            break;
          }
        }

        if (identico == false) {
          arr.push(numAleatorio);
          arr.sort((a, b) => a - b);
          num++;
        }
      }
    }
    let numeros = arr.map((numero) => `<p>${numero}</p>`).join(" ");
    document.querySelector("#info").innerHTML = numeros;
    apagaNumInput();
  } else if (quant < 6 || quant > 15) {
    apagaNumInput();
    apagarArr();
    err1.classList.remove("hidden");
    setTimeout(() => {
      err1.classList.add("hidden");
    }, 3000);
  } else {
    apagaNumInput();
    apagarArr();
    err2.classList.remove("hidden");
    setTimeout(() => {
      err2.classList.add("hidden");
    }, 3000);
  }
};

btn.addEventListener("click", (e) => {
  e.preventDefault();
  numSorteado();
});
