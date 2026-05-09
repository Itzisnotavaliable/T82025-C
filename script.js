// ====================
// LISTA DE FILMES
// ====================
const filmes = [
  {
    titulo: "AFTS 1 — A Origem do Mal",
    elenco: "Artur Coelho, Andrey Vieira, Gabriel Vitor, Matheus Thiago, Samuel Erivaldo, Fernanda Cabral, Geane Vieira, Elisangela Ayres, ..",
    sinopse: "No ETE Cícero Dias, um grupo de estudantes recém-chegados tenta lidar com a avalanche de trabalhos e atividades que parece nunca parar.",
    image: "AFTS (2025).png"
  },

  {
    titulo: "AFTS 2 — O Mal Sempre Volta, e Cada Vez Pior",
    elenco: "Artur Coelho, Andrey Vieira, Gabriel Vitor, Matheus Thiago, Samuel Erivaldo...",
    sinopse: "Após conseguirem libertar Artur, o grupo finalmente respira… mas só por alguns segundos.",
    image: "AFTS 2 (2025).png"
  }
];


// ====================
// LISTA DE LIVROS
// ====================
const livros = [
  {
    titulo: "1984",
    autor: "George Orwell",
    descricao: "Uma distopia sobre vigilância e controle absoluto.",
    image: "AFTS (2025).png"
  },

  {
    titulo: "Frankenstein",
    autor: "Mary Shelley",
    descricao: "O clássico terror científico que revolucionou a ficção.",
    image: "frankenstein.jpg"
  },

  {
    titulo: "Drácula",
    autor: "Bram Stoker",
    descricao: "O vampiro mais famoso da literatura.",
    image: "dracula.jpg"
  }
];



// ====================
// ELEMENTOS HTML
// ====================
const container = document.getElementById("filmes-container");

const livrosContainer = document.getElementById("livros-container");

const modal = document.getElementById("modal");

const modalImg = document.getElementById("modalImg");

const modalTitulo = document.getElementById("modalTitulo");

const modalElenco = document.getElementById("modalElenco");

const modalSinopse = document.getElementById("modalSinopse");

const closeBtn = document.getElementById("closeModal");



// ====================
// CRIAR CARDS DOS FILMES
// ====================
filmes.forEach((filme, index) => {

  const card = document.createElement("div");

  card.className = "card";

  card.innerHTML = `
    <h2>${filme.titulo}</h2>
    <p>${filme.elenco}</p>
  `;

  card.addEventListener("click", () => abrirModal(index));

  container.appendChild(card);
});



// ====================
// CRIAR CARDS DOS LIVROS
// ====================
livros.forEach((livro) => {

  const card = document.createElement("div");

  card.className = "livro-card";

  card.innerHTML = `
    <img src="assets/${livro.image}" alt="${livro.titulo}">

    <h2>${livro.titulo}</h2>

    <p><strong>${livro.autor}</strong></p>

    <p>${livro.descricao}</p>
  `;

  livrosContainer.appendChild(card);
});



// ====================
// ABRIR MODAL
// ====================
function abrirModal(i) {

  modalImg.src = `assets/${filmes[i].image}`;

  modalTitulo.textContent = filmes[i].titulo;

  modalElenco.textContent = "Elenco: " + filmes[i].elenco;

  modalSinopse.textContent = "Sinopse: " + filmes[i].sinopse;

  modal.style.display = "flex";
}



// ====================
// FECHAR MODAL
// ====================
closeBtn.addEventListener("click", () => {

  modal.style.display = "none";
});

window.onclick = (e) => {

  if (e.target === modal) {

    modal.style.display = "none";
  }
};