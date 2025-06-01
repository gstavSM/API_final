import { Request, Response } from "express";
import { Presencas } from "../models/Presencas";

export const listarPresencas = async (req: Request, res: Response): Promise<any> => {
    const presencas = await Presencas.findAll();
    return res.json(presencas);
};

export const cadastrarPresenca = async (req: Request, res: Response): Promise<any> => {
    const { alunoId, disciplinaId, data, presente } = req.body;

    const novaPresenca = await Presencas.create({alunoId, disciplinaId, data, presente});

    return res.status(201).json({
        message: "Presença registrada com sucesso.",
        novaPresenca
    });
};

export const atualizarPresenca = async (req: Request, res: Response): Promise<any> => {
    const { presencaId } = req.params;
    const dadosAtualizados = req.body;

    const presenca = await Presencas.findByPk(presencaId);
    if (!presenca) {
        return res.status(404).json({ error: "Presença não encontrada." });
    }

    await presenca.update(dadosAtualizados, {
        fields: Object.keys(dadosAtualizados),
    });

    return res.status(200).json({
        message: "Presença atualizada com sucesso.", presenca,
    });
};

export const deletarPresenca = async (req: Request, res: Response): Promise<any> => {
    const { presencaId } = req.params;

    const presenca = await Presencas.findByPk(presencaId);
    if (!presenca) {
        return res.status(404).json({ error: "Presença não encontrada." });
    }

    await presenca.destroy();
    return res.json({ message: "Presença deletada com sucesso." });
};
