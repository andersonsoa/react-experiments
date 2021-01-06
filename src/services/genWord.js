// import axios from "axios";

const dados = [
  {
    dica: "Instrumento Musical",
    palavras: [
      "guitarra",
      "baixo",
      "bateria",
      "violão",
      "saxofone",
      "tropéte",
      "clarinete"
    ]
  },
  {
    dica: "Tem na Cozinha",
    palavras: ["faca", "fogão", "torneira", "armário", "porta"]
  },
  {
    dica: "Profissão",
    palavras: ["engenheiro", "médico", "motorista"]
  }
];

function genWord() {
  const gen = dados[Math.floor(Math.random() * dados.length)];

  const word = gen.palavras[Math.floor(Math.random() * gen.palavras.length)];

  return {
    tip: gen.dica,
    word: word,
    masked: Array(word.length).fill("")
  };
}

export default genWord;
