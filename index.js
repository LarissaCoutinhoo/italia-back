const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

const FRONT_URL = process.env.FRONT_URL || 'https://italia-front.vercel.app';

const lugares = [
  {
    id: 1,
    nome: 'Fontana di Trevi',
    descricao: 'O chafariz mais famoso de Roma, perfeito para fotos e para vivenciar o clima da cidade.',
    imagem: `${FRONT_URL}/imagens/fontana-di-trevi.svg`
  },
  {
    id: 2,
    nome: 'Giolitti',
    descricao: 'Uma gelateria tradicional com sabores artesanais incríveis.',
    imagem: `${FRONT_URL}/imagens/giolitti.svg`
  },
  {
    id: 3,
    nome: 'Villa Borghese',
    descricao: 'Um dos parques mais elegantes de Roma, ótimo para caminhadas e descanso.',
    imagem: `${FRONT_URL}/imagens/villa-borghese.svg`
  }
];

// Simple CORS for browser access from the frontend
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', process.env.CORS_ALLOW_ORIGIN || '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.sendStatus(204);
  next();
});

app.get('/', (req, res) => {
  res.send('API projeto-back: use /lugares para obter os dados.');
});

app.get('/lugares', (req, res) => {
  res.json(lugares);
});

app.listen(port, () => {
  console.log(`API rodando na porta ${port}`);
});