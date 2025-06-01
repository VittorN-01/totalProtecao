import produtos from './produtos.js';

document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const codigo = urlParams.get("codigo");

  // Corrigido: compara como string
  const produto = produtos.find(p => String(p.codigo) === codigo);

  if (produto !== null) {
    console.error("Produto com código", codigo)
  } else {
    console.error("Produto com código", codigo, "não encontrado.");
    document.getElementById("titulo-produto").innerText = "Produto não encontrado";
    return;
  }

  // Preenche dados
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
});
