import { Router } from "express";
import * as ProfessoresController from "../controllers/ProfessoresController";

const router = Router();

router.get("/listarTodosProfessores", ProfessoresController.listarProfessores);
router.post("/cadastrarProfessores", ProfessoresController.cadastrarProfessor);
router.put("/atualizarProfessores:professorId", ProfessoresController.atualizarProfessor);
router.delete("/deletarProfessores:professorId", ProfessoresController.deletarProfessor);

export default router;
