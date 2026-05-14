const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

const lugares = [
  {
    id: 1,
    nome: 'Fontana di Trevi',
    descricao: 'O chafariz mais famoso de Roma, perfeito para fotos e para vivenciar o clima da cidade.',
    imagem: '/imagens/fontana-di-trevi.svg'
  },
  {
    id: 2,
    nome: 'Giolitti',
    descricao: 'Uma gelateria tradicional com sabores artesanais incríveis.',
    imagem: '/imagens/giolitti.svg'
  },
  {
    id: 3,
    nome: 'Villa Borghese',
    descricao: 'Um dos parques mais elegantes de Roma, ótimo para caminhadas e descanso.',
    imagem: '/imagens/villa-borghese.svg'
  }
];

app.get('/lugares', (req, res) => {
  res.json(lugares);
});

app.listen(port, () => {
  console.log(`API rodando na porta ${port}`);
});