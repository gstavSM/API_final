import { Router } from "express";
import * as AlunoDisciplinaController from '../controllers/AlunoDisciplinaController'

const router = Router();

router.get('/listarTodasDisciplinas', AlunoDisciplinaController.vincularAlunoADisciplina);
router.post('/cadastrarDisciplina', AlunoDisciplinaController.listarDisciplinasDoAluno);
router.get("/listarDisciplinasDoAluno/:alunoId", AlunoDisciplinaController.listarDisciplinasDoAluno);
router.post("/vincularAlunoADisciplina", AlunoDisciplinaController.vincularAlunoADisciplina);

export default router;