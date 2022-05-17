const btn = document.querySelector("#send");
const info = document.querySelector("#info");

btn.addEventListener("click", (e) => {
  e.preventDefault();

  let text = "";

  const quant = document.querySelector("#numbers").value;

  if (quant >= 6 && quant <= 15) {
    let i = 1;
    while (i <= quant) {
      console.log((text = Math.floor(Math.random() * 60) + 1));
      i++;
    }
  } else {
    console.log("O mínimo é 6 e o máximo é 15");
  }

  document.querySelector("#numbers").value = "";
});
