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

function criptografarTexto(valueTextarea) {
  let novoTexto = "";

  if (valueTextarea === "") return 0;
  for (let i = 0; i < valueTextarea.length; i++) {
    if (
      (valueTextarea.charAt(i) >= "à" && valueTextarea.charAt(i) <= "ÿ") ||
      (valueTextarea.charAt(i) >= "A" && valueTextarea.charAt(i) <= "Z")
    )
      return -1;
    if (valueTextarea.charAt(i) == "e") novoTexto += "enter";
    else if (valueTextarea.charAt(i) == "i") novoTexto += "imes";
    else if (valueTextarea.charAt(i) === "a") novoTexto += "ai";
    else if (valueTextarea.charAt(i) === "o") novoTexto += "ober";
    else if (valueTextarea.charAt(i) === "u") novoTexto += "ufat";
    else novoTexto += valueTextarea.charAt(i);
  }
  return novoTexto;
}

function descriptografarTexto(valueTextarea) {
  let novoTexto = "";

  if (valueTextarea === "") {
    return 0;
  } else {
    for (let i = 0; i < valueTextarea.length; i++) {
      if (
        (valueTextarea.charAt(i) >= "à" && valueTextarea.charAt(i) <= "ÿ") ||
        (valueTextarea.charAt(i) >= "A" && valueTextarea.charAt(i) <= "Z")
      ) {
        return -1;
      } else {
        // if (valueTextarea.includes("enter")) novoTexto += "e";
        // else if (valueTextarea.includes("imes")) novoTexto += "i";
        // else if (valueTextarea.includes("ai")) novoTexto += "a";
        // else if (valueTextarea.includes("ober")) novoTexto += "o";
        // else if (valueTextarea.includes("ufar")) novoTexto += "u";
        // else novoTexto += valueTextarea.charAt(i);
      }
    }
    return novoTexto;
  }
}

function processarTexto(funcaoProcessamento) {
  let valueTextarea = textarea.value.trim();

  if (funcaoProcessamento(valueTextarea) === 0) campoVazio();
  else if (funcaoProcessamento(valueTextarea) === -1)
    validarMinusculaSemAcento();
  else {
    output.textContent = funcaoProcessamento(valueTextarea);
    styleDisplay(block, none, block, block);
  }
}

function campoVazio() {
  alert("Por favor, preencha este campo!");
  textarea.value = "";
  textarea.focus();
  styleDisplay(none, block, none, none);
}

function validarMinusculaSemAcento() {
  alert("Apenas letras minúsculas e sem acento!");
  textarea.focus();
}

async function copiarTexto() {
  if (output.value !== "" || output.value !== null) {
    await navigator.clipboard.writeText(output.value.trim());
    alert("Texto de saída copiado com Sucesso!");
  }
}

function limpar() {
  textarea.value = "";
  output.value = "";
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
