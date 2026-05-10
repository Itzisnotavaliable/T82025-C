const filmes = [
  {
    titulo: "AFTS 1 — A Origem do Mal",
    elenco: "Artur Coelho, Andrey Vieira, Gabriel Vitor, Matheus Thiago, Samuel Erivaldo, Fernanda Cabral, Geane Vieira, Elisangela Ayres, ..",
    sinopse: "No ETE Cícero Dias, um grupo de estudantes recém-chegados tenta lidar com a avalanche de trabalhos e atividades que parece nunca parar. A pressão atinge o limite quando Artur desaparece sem explicação. Dias depois, ele retorna… mas algo nele não volta junto. O olhar é estranho, os silêncios são longos demais, e a escola começa a reagir à presença dele de formas que ninguém consegue explicar. Agora, eles precisam sobreviver ao que quer que tenha voltado no lugar do amigo, entender seus motivos e descobrir a verdade antes que a próxima ausência seja definitiva.",
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
    image: "Desenvolvimento.jpg",
    pdf: "AmigoChamadoMatheus.pdf"
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
    <a href="assets/${livro.pdf}" target="_blank" class="btn-livro">
    Ler Livro
    </a>
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

const perguntas = [
  { id: "protagonistas", texto: "Quem são os protagonistas dos filmes?" },
  { id: "antagonistas", texto: "Quem são os antagonistas?" },
  { id: "pior", texto: "Qual é o pior filme da franquia AFTS?" },
  { id: "geografados", texto: "Quem são os melhores personagens de Geografados?" },
  { id: "inimiga", texto: "Quem é a maior inimiga da franquia AFTS?" },
  { id: "quantos", texto: "Quantos filmes existirão na franquia AFTS?" },
  { id: "atores", texto: "Melhores atores (de acordo com a crítica)" },
  { id: "maria", texto: "Quem é Maria Cecília?" },
  { id: "aft5", texto: "Teremos AFTS 5?" },
  { id: "livros", texto: "O Time Oito tem livros?" }
];

// 🔥 mostrar perguntas na tela
const perguntasContainer = document.getElementById("perguntas");

perguntas.forEach(p => {
  const btn = document.createElement("button");
  btn.innerText = p.texto;
  btn.className = "pergunta";
  btn.onclick = () => responder(p.id);
  perguntasContainer.appendChild(btn);
});

// 💬 respostas
function responder(pergunta) {
  let resposta;

    if (pergunta === "protagonistas") {
    resposta = "Normalmente são os membros do Time 8, que além de dirigirem, gostam de participar de suas obras, enriquecendo o elenco com seus talentos.";
  }

  else if (pergunta === "antagonistas") {
    resposta = "Existem diversos antagonistas dentro das produções, porém os mais notáveis são: A Geógrafa Daniela de Assis, a historiadora Sheyla Mafra, a filósofa marionetista Luana Dantas, o Mestre dos Cálculos Teti e a Bióloga suprema Edja Costa (em memória e agradecimento).";
  }

  else if (pergunta === "pior filme") {
    resposta = "Considerado por muitos o pior, temos AFTS 2, o filme com pior recepção dentro da franquia, e, à parte, N1, com o segundo maior número de críticas.";
  }

  else if (pergunta === "geografados") {
    resposta = "Os personagens de maior popularidade entre os espectadores são Daniela de Assis, Matheus Thiago e Samuel Erivaldo.";
  }

  else if (pergunta === "maior inimiga") {
    resposta = "Com toda certeza Marília Flávia, a maior crítica de AFTS, sendo negativada em diversos posts, mas ainda notável no cenário de avaliações (tipo a Miss Sunshine em 'Chicago').";
  }

  else if (pergunta === "quantos filmes") {
    resposta = "De acordo com o desenvolvedor Andrey Vieira, conhecido publicamente como CHAOS, AFTS se encerraria no quarto longa, que promete eternizar a franquia e fechar o ciclo sobrenatural e ácido dos filmes.";
  }

  else if (pergunta === "melhores atores") {
    resposta = "1- Matheus Thiago (Geografados, N1, AFTS 3 e Marília Pópis) | 2- Andrey Vieira (AFTS 2, AFTS 3, Marília Pópis e BBBCAST) | 3- Gabriel Vitor (Cabum) | 4- Artur Coelho (AFTS 1 e Marília Pópis) | 5- Samuel Erivaldo (Geografados).";
  }

  else if (pergunta === "maria cecilia") {
    resposta = "Maria Cecília é uma personagem importante da saga AFTS, que assim como Artur, sofreu nas mãos da entidade, sendo fundamental para a virada de chave no primeiro longa.";
  }

  else if (pergunta === "aft5") {
    resposta = "Tá repreendido.";
  }

  else if (pergunta === "livros") {
    resposta = "Sim, o Time Oito possui livros, todos de autoria de Andrey Vieira, atual escritor.";
  }

  else {
    resposta = "Pergunta não encontrada.";
  }

document.getElementById("resposta").innerText = resposta;
}