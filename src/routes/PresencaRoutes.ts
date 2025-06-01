import { Router } from "express";
import * as PresencasController from "../controllers/PresencaController";

const router = Router();

router.get("/listarTodasPresenca", PresencasController.listarPresencas);
router.post("/cadastrarPresencas", PresencasController.cadastrarPresenca);
router.put("/atulizarPresencas:presencaId", PresencasController.atualizarPresenca);
router.delete("/deletarPresencas:presencaId", PresencasController.deletarPresenca);

export default router;
