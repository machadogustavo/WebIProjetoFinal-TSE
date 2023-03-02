export default [

  // Questão 1
  {
    question: "Quantos países no mundo usam o voto eletrônico?",
    answers: [
      {
        option: "Apenas três em todo mundo: Brasil, Cuba e Venezuela.",
        correct: false,
      },
      {
        option:
          "Mais de 20 países adotam ou já usaram alguma forma de voto eletrônico, para eleições gerais ou regionais.",
        correct: true,
      },
      { option: "Somente o Brasil",
       correct: false },
    ],
  },


  // Questão 2
  {
    question: "Como seu voto vai da urna eletrônica até o TSE?",
    answers: [
      { option: "Resultados das urnas são impressos e transportados por motos, barcos ou carros diretamente até o TSE", correct: false },
      { option: "Via internet comum, ou aberta", correct: false },
      { option: "Via rede de internet privativa (ou VPN)", correct: true },
    ],
  },


  // Questão 3
  {
    question: "O que acontece se eu não votar e não justificar?",
    answers: [
      { option: "Recebo uma pequena multa por turno perdido", correct: true },
      { option: "Nada acontece", correct: false },
      { option: "Sou preso e perco meu título de eleitor.", correct: false },
    ],
  },

  
  // Questão 4
  {
    question: "Votos nulos e brancos podem influenciar uma eleição?",
    answers: [
      { option: "Não, nunca", correct: false },
      { option: "Sim,sempre", correct: false },
      { option: "Diretamente, não. Indiretamente, sim.", correct: true },
    ],
  },

  // Questão 5
  {
    question: "Qual o cargo político eletivo encarregado de administrar os recursos de um município em prol dos interesses dos cidadãos?",
    answers: [
      { option: "Governador", correct: false },
      { option: "Vereador", correct: false },
      { option: "Prefeito", correct: true },
    ],
  },


  
  // Questão 6
  {
    question: "São requisitos para se candidatar a um cargo eletivo no Brasil:",
    answers: [
      { option: "Ser brasileiro nato ou naturalizado", correct: false },
      { option: "Estar alistado como eleitor e filiado a um partido político", correct: false },
      { option: "Estar em pleno exercício dos direitos políticos", correct: false },
      { option: "Todas as alternativas estão corretas", correct: true },
    ],
  },

  // Questão 7
  {
    question: "È vedada a propaganda partidária desde 48h antes até 245 depois da eleição. Dentre estas, quais são proibidas?",
    answers: [
      { option: "Boca-de-urna e panfletagem com nomes de candidatos.", correct: false },
      { option: "Uso de alto-falantes e amplificadores de som.", correct: false },
      { option: "Comícios ou carreatas.", correct: false },
      { option: "Todas as alternativas são proibidas", correct: true },
    ],
  },


  // Questão 8
  {
    question: "Em qual situação o voto é facultativo?",
    answers: [
      { option: "Maiores de 70 anos e jovens entre 14 e 18 anos.", correct: false },
      { option: "Maiores de 60 anos e jovens entre 16 e 17 anos.", correct: false },
      { option: "Maiores de 70 anos, jovens entre 16 e 17 anos e para analfabetos.", correct: true },
      { option: "Jovens menores de 18 anos e para analfabetos.", correct: false },
    ],
  },

  // Questão 9
  {
    question: "Atualmente, para votar, o eleitor precisa se identificar. Quais delas é uma forma de identificação aceita?",
    answers: [
      { option: "Certidão de Nascimento", correct: false },
      { option: "Qualquer documento oficial com foto.", correct: true },
      { option: "Carteira nacional de vacinação", correct: false },
      { option: "Carteirinha de Estudante", correct: false },
    ],
  },

   // Questão 10
  {
    question: "Todos têm os direitos de votar e de ser votado. Praticar esses direitos é exercer:",
    answers: [
      { option: "A cidadania", correct: true },
      { option: "A democracia", correct: false },
      { option: "A política", correct: false },
    ],
  },
];
