import { Request, Response } from "express";
import { Cursos } from "../models/Cursos";

export const listarCursos = async (req: Request, res: Response): Promise<any> => {
    const cursos = await Cursos.findAll();
    return res.json(cursos);
};

export const cadastrarCurso = async (req: Request, res: Response): Promise<any> => {
    const { nome, descricao } = req.body;

    const novoCurso = await Cursos.create({ nome, descricao });

    return res.status(201).json({
        message: "Curso cadastrado com sucesso.",
        novoCurso
    });
};

export const atualizarCurso = async (req: Request, res: Response): Promise<any> => {
    try {
        const { cursoId } = req.params;
        const dadosAtualizados = req.body;

        const curso = await Cursos.findByPk(cursoId);
        if (!curso) {
            return res.status(404).json({ error: "Curso não encontrado." });
        }

        await curso.update(dadosAtualizados, { fields: Object.keys(dadosAtualizados) });

        return res.status(200).json({
            message: "Curso atualizado com sucesso.",
            curso
        });
    } catch (error) {
        return res.status(500).json({ message: "Erro ao atualizar curso.", error });
    }
};

export const deletarCurso = async (req: Request, res: Response): Promise<any> => {
    const { cursoId } = req.params;
    const curso = await Cursos.findByPk(cursoId);

    if (curso) {
        await curso.destroy();
        return res.json({ message: "Curso deletado com sucesso." });
    }

    return res.status(404).json({ error: "Curso não encontrado." });
};
