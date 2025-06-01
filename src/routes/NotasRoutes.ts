
import { Router } from "express";
import * as NotasController from "../controllers/NotasController";

const router = Router();

router.get("/listarTodasNotas", NotasController.listarNotas);

// GET /notas/:notaId - (opcional) Buscar uma nota específica
// router.get("/:notaId", NotasController.buscarNota); // (se você quiser implementar)

router.post("/cadastrarNotas", NotasController.cadastrarNota);
router.put("/atualizarNotas:notaId", NotasController.atualizarNota);
router.delete("/deletarNotas:notaId", NotasController.deletarNota);

export default router;
