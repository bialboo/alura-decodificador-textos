const divResultadoDireita = document.querySelector("div.resultado-texto");
const inputText = document.querySelector("textarea.input-text");
const alertText = document.querySelector("span.info");
const htmlNaoEncontrado = divResultadoDireita.innerHTML;
const defaultPlaceholder = "Digite seu texto:";
const errorPlaceholder = "Nenhuma mensagem para descriptografar, digite novamente.";

const htmlNaoValido = `
    <h3>Mensagem inválida, tente novamente</h3>
    <p>Digite o texto que você deseja criptografar ou descriptografar.</p>`;

const bttCopiar = `
    <div class="btt-acao-texto">
        <button class="btt-copiar" type="button" onclick="copiar()">Copiar</button>
    </div>`;

function validarTexto(texto) {
  return !/[A-ZÀ-ü0-9]/.test(texto);
}

function escreverLadoDireito(texto) {
  divResultadoDireita.innerHTML = `<p class="mensagem"><strong>${texto}</strong></p>`;
  divResultadoDireita.innerHTML += bttCopiar;
  inputText.value = "";
  inputText.placeholder = defaultPlaceholder;
}

function criptografar() {
  const mensagem = inputText.value;
  if (validarTexto(mensagem) && mensagem !== "") {
    const mensagemCriptografada = mensagem
      .replaceAll("e", "enter")
      .replaceAll("i", "imes")
      .replaceAll("a", "ai")
      .replaceAll("o", "ober")
      .replaceAll("u", "ufat");
    alertText.classList.remove("alert");
    escreverLadoDireito(mensagemCriptografada);
    return mensagemCriptografada;
  } else {
    alertText.classList.add("alert");
    divResultadoDireita.innerHTML = htmlNaoValido;
  }
}

function descriptografar() {
  const textoEsquerda = inputText.value;
  if (validarTexto(textoEsquerda) && textoEsquerda !== "") {
    const mensagemDescriptografada = textoEsquerda
      .replaceAll("enter", "e")
      .replaceAll("imes", "i")
      .replaceAll("ai", "a")
      .replaceAll("ober", "o")
      .replaceAll("ufat", "u");
    alertText.classList.remove("alert");
    escreverLadoDireito(mensagemDescriptografada);
    return mensagemDescriptografada;
  } else {
    inputText.placeholder = defaultPlaceholder;
    divResultadoDireita.innerHTML = htmlNaoValido;
  }
}

