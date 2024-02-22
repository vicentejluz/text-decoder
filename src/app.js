const textarea = document.querySelector(
  ".apresentacao__criptografia_descriptografia__textarea"
);

const output = document.querySelector(
  ".apresentacao__resultado__saida__output"
);

const divNenhumTexto = document.querySelector(
  ".apresentacao__resultado__saida__mensagem"
);

const botaoCopiar = document.querySelector(
  ".apresentacao__resultado__botao__copiar"
);

const botaoLimpar = document.querySelector(
  ".apresentacao__resultado__botao__limpar"
);

const none = "none";
const block = "block";

function criptografia() {
  processarTexto(criptografarTexto);
}

function descriptografia() {
  processarTexto(descriptografarTexto);
}

function criptografarTexto(valorTextArea) {
  let novoTexto = "";

  if (valorTextArea === "") return "Por favor, preencha este campo!";
  for (let i = 0; i < valorTextArea.length; i++) {
    if (
      (valorTextArea.charAt(i) >= "à" && valorTextArea.charAt(i) <= "ÿ") ||
      (valorTextArea.charAt(i) >= "A" && valorTextArea.charAt(i) <= "Z")
    )
      return "Apenas letras minúsculas e sem acento!";
    if (valorTextArea.charAt(i) == "e") novoTexto += "enter";
    else if (valorTextArea.charAt(i) == "i") novoTexto += "imes";
    else if (valorTextArea.charAt(i) === "a") novoTexto += "ai";
    else if (valorTextArea.charAt(i) === "o") novoTexto += "ober";
    else if (valorTextArea.charAt(i) === "u") novoTexto += "ufat";
    else novoTexto += valorTextArea.charAt(i);
  }

  return novoTexto;
}

function descriptografarTexto(valorTextArea) {
  if (valorTextArea === "") return "Por favor, preencha este campo!";
  for (let i = 0; i < valorTextArea.length; i++) {
    if (
      (valorTextArea.charAt(i) >= "à" && valorTextArea.charAt(i) <= "ÿ") ||
      (valorTextArea.charAt(i) >= "A" && valorTextArea.charAt(i) <= "Z")
    )
      return "Apenas letras minúsculas e sem acento!";
  }
  const novoTexto = valorTextArea
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");

  return novoTexto;
}

function processarTexto(funcaoProcessamento) {
  const texto = funcaoProcessamento(textarea.value.trim());

  if (texto === "Por favor, preencha este campo!") campoVazio(texto);
  else if (texto === "Apenas letras minúsculas e sem acento!")
    validarMinusculaSemAcento(texto);
  else {
    output.textContent = texto;
    styleDisplay(block, none, block, block);
  }
}

function campoVazio(preenchaCampo) {
  alert(preenchaCampo);
  limpar();
}

function validarMinusculaSemAcento(letrasMinusculasSemAcento) {
  alert(letrasMinusculasSemAcento);
  textarea.focus();
}

async function copiarTexto() {
  if (output.value !== "" || output.value !== null) {
    await navigator.clipboard.writeText(output.value.trim());
    const copia = await navigator.clipboard.readText();
    alert("Texto copiado com Sucesso! + " + copia);
  }
}

function limpar() {
  textarea.value = "";
  textarea.focus();
  styleDisplay(none, block, none, none);
}

function styleDisplay(
  outputDisplay,
  divNenhumTextoDisplay,
  botaoCopiarDisplay,
  botaoLimparDisplay
) {
  output.style.display = outputDisplay;
  divNenhumTexto.style.display = divNenhumTextoDisplay;
  botaoCopiar.style.display = botaoCopiarDisplay;
  botaoLimpar.style.display = botaoLimparDisplay;
}
