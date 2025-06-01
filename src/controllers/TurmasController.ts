import { Request, Response } from "express";
import { Turmas } from "../models/Turmas";

export const listarTurmas = async (req: Request, res: Response): Promise<any> => {
  try {
    const turmas = await Turmas.findAll();
    return res.json(turmas);
  } catch (error) {
    return res.status(500).json({ message: "Erro ao listar turmas.", error });
  }
};

export const cadastrarTurma = async (req: Request, res: Response): Promise<any> => {
  try {
    const { nome, cursoId } = req.body;

    const novaTurma = await Turmas.create({ nome, cursoId });

    return res.status(201).json({
      message: "Turma cadastrada com sucesso.",
      novaTurma,
    });
  } catch (error) {
    return res.status(500).json({ message: "Erro ao cadastrar turma.", error });
  }
};

export const atualizarTurma = async (req: Request, res: Response): Promise<any> => {
  try {
    const { turmaId } = req.params;
    const dadosAtualizados = req.body;

    const turma = await Turmas.findByPk(turmaId);
    if (!turma) {
      return res.status(404).json({ error: "Turma não encontrada." });
    }

    await turma.update(dadosAtualizados, {
      fields: Object.keys(dadosAtualizados),
    });

    return res.status(200).json({
      message: "Turma atualizada com sucesso.",
      turma,
    });
  } catch (error) {
    return res.status(500).json({ message: "Erro ao atualizar turma.", error });
  }
};

export const deletarTurma = async (req: Request, res: Response): Promise<any> => {
  try {
    const { turmaId } = req.params;

    const turma = await Turmas.findByPk(turmaId);
    if (!turma) {
      return res.status(404).json({ error: "Turma não encontrada." });
    }

    await turma.destroy();
    return res.json({ message: "Turma deletada com sucesso." });
  } catch (error) {
    return res.status(500).json({ message: "Erro ao deletar turma.", error });
  }
};
