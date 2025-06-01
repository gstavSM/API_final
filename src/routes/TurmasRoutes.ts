import { Router } from "express";
import * as TurmasController from "../controllers/TurmasController";

const router = Router();

router.get("/listarTodasTurmas", TurmasController.listarTurmas);
router.post("/cadastrarTurmas", TurmasController.cadastrarTurma);
router.put("/atualizarTurmas:turmaId", TurmasController.atualizarTurma);
router.delete("/deletarTurmas:turmaId", TurmasController.deletarTurma);

export default router;
