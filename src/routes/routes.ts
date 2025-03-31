import { Router } from 'express';

import * as ApiController from '../controllers/apiController';
import * as AlunoController from '../controllers/AlunoController';
import * as DisciplinaController from '../controllers/DisciplinaController'
import * as AlunoDisciplinaController from '../controllers/AlunoDisciplinaController'

const router = Router();

router.get('/ping', ApiController.ping);

router.get('/listarTodosAlunos', AlunoController.listarAlunos);
router.post('/cadastrarAlunos', AlunoController.cadastrarAluno);

router.get('/listarTodasDisciplinas', DisciplinaController.listarDisciplinas);
router.post('/cadastrarDisciplina', DisciplinaController.cadastrarDisciplina);

router.get('/listarTodasDisciplinas', AlunoDisciplinaController.vincularAlunoADisciplina);
router.post('/cadastrarDisciplina', AlunoDisciplinaController.listarDisciplinasDoAluno);

router


export default router;
