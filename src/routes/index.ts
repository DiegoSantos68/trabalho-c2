import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.send('Bem-vindo ao nosso servidor! Acesse /users para criar usuários e /posts para criar posts.');
});

export default router;
