import { Request, Response } from "express";
import { Notas } from "../models/Notas";

export const listarNotas = async (req: Request, res: Response): Promise<any> => {
  try {
    const notas = await Notas.findAll();
    return res.json(notas);
  } catch (error) {
    return res.status(500).json({ message: "Erro ao buscar notas.", error });
  }
};

export const cadastrarNota = async (req: Request, res: Response): Promise<any> => {
  try {
    const { alunoId, disciplinaId, nota, data_avaliacao } = req.body;

    const novaNota = await Notas.create({alunoId, disciplinaId, nota, data_avaliacao
    });

    return res.status(201).json({
      message: "Nota cadastrada com sucesso.",
      novaNota
    });
  } catch (error) {
    return res.status(500).json({ message: "Erro ao cadastrar nota.", error });
  }
};

export const atualizarNota = async (req: Request, res: Response): Promise<any> => {
  try {
    const { notaId } = req.params;
    const dadosAtualizados = req.body;

    const nota = await Notas.findByPk(notaId);
    if (!nota) {
      return res.status(404).json({ error: "Nota não encontrada." });
    }

    await nota.update(dadosAtualizados, {
      fields: Object.keys(dadosAtualizados)
    });

    return res.status(200).json({
      message: "Nota atualizada com sucesso.",
      nota
    });
  } catch (error) {
    return res.status(500).json({ message: "Erro ao atualizar nota.", error });
  }
};

export const deletarNota = async (req: Request, res: Response): Promise<any> => {
  try {
    const { notaId } = req.params;

    const nota = await Notas.findByPk(notaId);
    if (!nota) {
      return res.status(404).json({ error: "Nota não encontrada." });
    }

//rever

    await nota.destroy();
    return res.json({ message: "Nota deletada com sucesso." });
  } catch (error) {
    return res.status(500).json({ message: "Erro ao deletar nota.", error });
  }
};
