import express from 'express';
import AutorController from '../controllers/autoresController.js';

const router = express.Router();

router
  .get('/autores', AutorController.listarAutor)
  .post('/autores', AutorController.cadastrarAutor)
  .put('/autores/:id', AutorController.actualizarAutor)
  .get('/autores/:id', AutorController.listarAutorPorId)
.delete('/autores/:id', AutorController.excluirAutor)



export default router;