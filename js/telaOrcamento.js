import produtos from './produtos.js';

document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const codigo = urlParams.get("codigo");

  // Busca o produto pelo código (como string)
  const produto = produtos.find(p => String(p.codigo) === codigo);

  if (produto) {
    console.log("Produto com código", codigo);
  } else {
    console.error("Produto com código", codigo, "não encontrado.");
    document.getElementById("titulo-produto").innerText = "Produto não encontrado";
    // Opcional: limpar outros campos para evitar confusão
    document.getElementById("imagem-produto").src = "";
    document.getElementById("detalhes-produto").innerText = "";
    document.getElementById("codigo-produto").innerText = "";
    return; // Para não continuar o script
  }

  // Preenche os dados do produto
  document.getElementById("imagem-produto").src = produto.img;
  document.getElementById("titulo-produto").innerText = produto.nome;
  document.getElementById("detalhes-produto").innerText = produto.detalhes;
  document.getElementById("codigo-produto").innerText = "Código do Produto: " + produto.codigo.toUpperCase();

  // Campos extras
  const campos = [document.getElementById("campo-opcional-1"), document.getElementById("campo-opcional-2")];

  produto.camposExtras.forEach((campo, index) => {
    if (campo.tipo === "select") {
      campos[index].style.display = "block";
      campos[index].innerHTML = `
        <label for="${campo.id}">${campo.label}:</label>
        <select id="${campo.id}" name="${campo.id}">
          <option value="">Selecione...</option>
          ${campo.opcoes.map(op => `<option value="${op}">${op}</option>`).join("")}
        </select>
      `;
    } else {
      campos[index].style.display = "block";
      campos[index].innerHTML = `
        <label for="${campo.id}">${campo.label}:</label>
        <input type="text" id="${campo.id}" name="${campo.id}">
      `;
    }
  });

  // Validação do formulário para impedir envio sem produto carregado
  const formulario = document.getElementById("formulario");
  formulario.addEventListener("submit", function (e) {
    const tituloProduto = document.getElementById("titulo-produto").innerText.trim();
    const codigoProduto = document.getElementById("codigo-produto").innerText.trim();

    if (
      tituloProduto === "" ||
      tituloProduto === "Produto" ||
      tituloProduto === "Produto não encontrado" ||
      codigoProduto === ""
    ) {
      e.preventDefault();
      alert("Por favor, selecione um produto antes de solicitar o orçamento.");
    }
  });
});
