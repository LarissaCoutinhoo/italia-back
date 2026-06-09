const cors = require("cors");
const express = require("express");

const app = express();
const corsOptions = {
  origin: [
    "https://italia-front.vercel.app",
  ],
  methods: "GET,POST,PUT,DELETE",
  allowedHeaders: "Content-Type,Authorization",
};

app.use(cors(corsOptions));
const port = process.env.PORT || 3000;

const FRONT_URL = process.env.FRONT_URL || "https://italia-front.vercel.app";

const lugares = [
  {
    id: 1,
    nome: "Fontana di Trevi",
    descricao:
      "O chafariz mais famoso de Roma, perfeito para fotos e para vivenciar o clima da cidade.",
    imagem: `${FRONT_URL}/imagens/fontana-di-trevi.svg`,
  },
  {
    id: 2,
    nome: "Giolitti",
    descricao: "Uma gelateria tradicional com sabores artesanais incríveis.",
    imagem: `${FRONT_URL}/imagens/giolitti.svg`,
  },
  {
    id: 3,
    nome: "Villa Borghese",
    descricao:
      "Um dos parques mais elegantes de Roma, ótimo para caminhadas e descanso.",
    imagem: `${FRONT_URL}/imagens/villa-borghese.svg`,
  },
];

app.get("/", (req, res) => {
  res.send("API projeto-back: use /lugares para obter os dados.");
});

app.get("/lugares", (req, res) => {
  res.json(lugares);
});

app.get("/v1", (req, res) => {
  res.json({
    message: "Api v1 respondendo no container docker...",
    chamada_em: new Date().toLocaleString("pt-BR"),
  });
});

app.listen(port, () => {
  console.log(`API rodando na porta ${port}`);
});
