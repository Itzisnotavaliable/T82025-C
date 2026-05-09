const filmes = [
  {
    titulo: "AFTS 1 — A Origem do Mal",
    elenco: "Artur Coelho, Andrey Vieira",
    sinopse: "Teste",
    image: "AFTS (2025).png"
  },

  {
    titulo: "AFTS 2 — O Mal Sempre Volta, e Cada Vez Pior",
    elenco: "Artur Coelho, Andrey Vieira, Gabriel Vitor, Matheus Thiago, Samuel Erivaldo, Renato Marques Moura, João Guilherme, Thulio Barbosa, ..",
    sinopse: "Após conseguirem libertar Artur, o grupo finalmente respira… mas só por alguns segundos. Porque a entidade que o dominava não desapareceu — apenas pulou para o próximo corpo que encontrou. E dessa vez, ela não está escondida. Ela quer brincar.",
    image: "AFTS 2 (2025).png"
  },

  {
    titulo: "N1 — O Mal se Manifesta de Diversas Formas",
    elenco: "Gabriel Vitor, Matheus Thiago, Judith Butler, Renato Marques, Tobin Bell, Regina Hall",
    sinopse: "Entre AFTS 1 e N1, o ETE entrou num período que ninguém gosta de comentar. Gabriel Vitor e Matheus Tiago mostram o que realmente aconteceu nesse intervalo.",
    image: "N1 (2025).png"
  },

  {
    titulo: "GEOGRAFADOS — Um Por Todos, e Todos em Pânico!",
    elenco: "Andrey Vieira, Artur Coelho, Daniela de Assis, Gabriel Vitor, Matheus Thiago, Samuel Erivaldo, Tia Fernanda",
    sinopse: "Depois dos eventos de N1, o Time Oito achava que já tinha sobrevivido ao pior. Achou errado.",
    image: "GEOGRAFADOS (2025).png"
  },

  {
    titulo: "AFTS 3 — Cada Acerto é Milagre, e Cada Erro Vira um Espetáculo Patacumbástico",
    elenco: "Andrey Vieira, Matheus Thiago, Artur Coelho, Gabriel Vitor, Samuel Erivaldo, Daniela de Assis, Sheyla Mafra, Edja Costa, Raphael Albino, Jeniffer Dantas, Juvenal, Henrique Samuel, Davi Neres, Luana Dantas, ..",
    sinopse: "No ápice da saga, AFTS 3 marca o grande retorno do Time Oito para encerrar o primeiro ciclo.",
    image: "AFTS 3 (2025).png"
  },

  {
    titulo: "Marília Pópis — Ela Chegou Para Arrumar a Casa, e Talvez a Vida dos Outros.",
    elenco: "Aldineide de Queiróz, Andrey Vieira, Artur Coelho, Gabriel Vitor, Marília Romeiro, Matheus Thiago, Samuel Erivaldo, ..",
    sinopse: "Após desaparecer nos céus de Londres em 1930, a lendária babá mágica Marília Pópis está de volta.",
    image: "MARÍLIA POPIS.png"
  },

  {
    titulo: "BBBCAST - Já te deram pão e circo. O resto você chama de entretenimento",
    elenco: "Andrey Vieira, Artur Coelho, Matheus Thiago, Henrique Samuel, Luan Murilo, Luana Dantas, ..",
    sinopse: "Ainda em desenvolvimento..",
    image: "BBBCAST (2026).png"
  }

];

const livros = [
  {
    titulo: "A Um Amigo Chamado Matheus",
    autor: "Andrey Vieira",
    descricao: "Em Desenvolvimento...",
    image: "Desenvolvimento.jpg"
  }
];

const container = document.getElementById("filmes-container");

const livrosContainer = document.getElementById("livros-container");

const modal = document.getElementById("modal");

const modalImg = document.getElementById("modalImg");

const modalTitulo = document.getElementById("modalTitulo");

const modalElenco = document.getElementById("modalElenco");

const modalSinopse = document.getElementById("modalSinopse");

const closeBtn = document.getElementById("closeModal");

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

function abrirModal(i) {

  modalImg.src = `assets/${filmes[i].image}`;

  modalTitulo.textContent = filmes[i].titulo;

  modalElenco.textContent = "Elenco: " + filmes[i].elenco;

  modalSinopse.textContent = "Sinopse: " + filmes[i].sinopse;

  modal.style.display = "flex";
}

closeBtn.addEventListener("click", () => {

  modal.style.display = "none";
});

window.onclick = (e) => {

  if (e.target === modal) {

    modal.style.display = "none";
  }
};

console.log("JS carregou");