const arrayDasPalavras = ["impressionante.", "muito massa!", "DELICINHA :3", "bom pra buné!", "ostentavel.", "show de bola...", "no grau!", "sobressalente.", "pegando fogo bixo!"];
const spanDaPalavra = document.querySelector('.span-da-palavra');
const cursor = document.querySelector('.cursor');
const piscando = 'piscando'
let i = 0;
let j = 0;

function escreverPalavra() {
  const arrayDasLetras = arrayDasPalavras[i].split("");
  setTimeout(() => {
    j++;
    spanDaPalavra.textContent = arrayDasLetras.slice(0, j).join("");
    if (j < arrayDasLetras.length) {
      cursor.classList.remove(piscando);
      escreverPalavra();
    } else {
      cursor.classList.add(piscando);
      setTimeout(apagarPalavra, mandarDigitacaoVariada(500,3000));
    }
  }, mandarDigitacaoVariada(20,90));
}

function apagarPalavra() {
  const arrayDasLetras = arrayDasPalavras[i].split("");
  setTimeout(() => {
    j--;
    spanDaPalavra.textContent = arrayDasLetras.slice(0, j).join("");
    if (j > 0) {
      cursor.classList.remove(piscando);
      apagarPalavra();
    } else {
      i++
      if(i >= arrayDasPalavras.length) i = 0;
      cursor.classList.add(piscando);
      setTimeout(escreverPalavra, mandarDigitacaoVariada(500,3000));
    }
  }, mandarDigitacaoVariada(20,90));
}


function mandarDigitacaoVariada(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

cursor.classList.add(piscando);
escreverPalavra();

