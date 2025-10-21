// seleciona todos os botões de certificado
const certButtons = document.querySelectorAll(".cert-button");

// modal e elementos internos
const modal = document.getElementById("cert-modal");
const modalImg = document.getElementById("modal-img");
const closeModal = document.getElementById("close-modal");

// evento para abrir modal ao clicar no botão
certButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    modal.style.display = "flex";
    modalImg.src = btn.dataset.img;
  });
});

// fechar modal ao clicar no "x"
closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

// fechar modal ao clicar fora da imagem
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
