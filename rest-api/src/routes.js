import { Router } from 'express';
import { libros } from './controller.js';

export const router = Router();

router.get('/libros', libros.getAll);
router.get('/libros/:id', libros.getOne);
router.post('/libros', libros.create);
router.put('/libros/:id', libros.update);
router.delete('/libros/isbn/:isbn', libros.delete);
