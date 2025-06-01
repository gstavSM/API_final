import { Router } from "express";
import * as CursosController from '../controllers/CursosController'

const router = Router();

router.get('/listarTodosCursos', CursosController.listarCursos);
router.post('/cadastrarCursos', CursosController.cadastrarCurso);
router.put('/atualizarCursos/:cursosId', CursosController.atualizarCurso);
router.delete('/deletarCursos/:cursosId', CursosController.deletarCurso);

export default router;
