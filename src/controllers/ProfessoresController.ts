import { Request, Response } from "express";
import { Professores } from "../models/Professores";


export const listarProfessores = async (req: Request, res: Response): Promise<any> => {
    const professores = await Professores.findAll();
    return res.json(professores);

};

export const cadastrarProfessor = async (req: Request, res: Response): Promise<any> => {
    const { nome,email } = req.body;

    const novoProfessor = await Professores.create({ nome, email });

    return res.status(201).json({
        message: "Professor cadastrado com sucesso",
        novoProfessor
    });
};

export const atualizarProfessor = async (req: Request, res: Response): Promise<any> => {
    const { professorId } = req.params;
    const dadosAtualizados = req.body;

    const professor = await Professores.findByPk(professorId)
    if (!professor) {
        return res.status(404).json({ error: "Professor não encontrado."});
    
    }

    await professor.update(dadosAtualizados, {
        fields: Object.keys(dadosAtualizados),
    });

    return res.status(200).json({
        message: "Professor atualizado com sucesso.",
        professor,
    });
};

export const deletarProfessor = async (req: Request, res: Response): Promise<any> => {
    const { professorId } = req.params;

    const professor = await Professores.findByPk(professorId);
    if (!professor) {
        return res.status(404).json({ error: "Professor não encontrado."});

    }

     await professor.destroy();
    return res.json({ message: "Professor deletado com sucesso." });
};