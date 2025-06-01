import { Router } from 'express';
import * as DisciplinaController from '../controllers/DisciplinaController'

const router = Router();

router.get('/listarTodasDisciplinas', DisciplinaController.listarDisciplinas);
router.post('/cadastrarDisciplina', DisciplinaController.cadastrarDisciplina);
router.put('/atualizarDisciplina/:disciplinaId', DisciplinaController.atualizarDisciplina);
router.delete('/deletarDisciplina/:disciplinaId',DisciplinaController.deletarDisciplina)

export default router;