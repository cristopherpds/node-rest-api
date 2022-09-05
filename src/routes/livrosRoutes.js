import express from 'express';
import LivroController from '../controllers/livroController.js';

const router = express.Router();

router
  .get('/livros', LivroController.listarLivros)
  .get('/livros/busca', LivroController.listarLivroPorEditora)
  .post('/livros', LivroController.cadastrarLivro)
  .put('/livros/:id', LivroController.actualizarLivro)
  .get('/livros/:id', LivroController.listarLivroPorId)
  .delete('/livros/:id', LivroController.excluirLivro)



export default router;