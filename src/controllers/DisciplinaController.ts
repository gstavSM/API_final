import { Request, Response } from "express";
import { Disciplinas } from "../models/Disciplinas";


export const listarDisciplinas = async  (req: Request, res: Response) : Promise<any> => {
    const disciplinas = await Disciplinas.findAll();
    return res.json(disciplinas);
}

export const cadastrarDisciplina = async (req: Request, res: Response) : Promise<any> => {
    const { nome } = req.body;

    if (nome) {
        let disciplinaExistente = await Disciplinas.findOne ({where: { nome }})
        if (!disciplinaExistente) {
            let novaDisciplina = await Disciplinas.create(( nome ));

            res.status(201);
            return res.json({
                message: "Disciplina cadastrada com sucesso",
                novaDisciplina
            });
        } else {
            return res.status(400).json({error: "Nome da disciplina já existe."});
        }
    }

    return res.status(400).json({error: "Nome da disciplina não enviado."});
};

export const atualizarDisciplina = async (req: Request, res: Response)  : Promise<any> => {
    try {
        const { disciplinaID } = req.params;
        const dadosAtualizados = req.body;

        const disciplina = await Disciplinas.findByPk(disciplinaID);
        if (!disciplina) {
            return res.status(404).json({error: "Aluno não encontrado."});

        }

        await  disciplina.update(dadosAtualizados, {fields: Object.keys(dadosAtualizados) });

        res.status(200).json({ message: "Disciplina atualizada com sucesso.", disciplina });
        
    }catch (error) {
        res.status(500).json({ message: "Erro ao atualizar Disciplina.", error });
    }
}  

    export const deletarDisciplina = async (req: Request, res: Response) : Promise<any> => {
        const { disciplinaId } =req.params;
        let disciplina = await Disciplinas.findByPk(disciplinaId);

        if (disciplina){
        await disciplina.destroy();
        return res.json ({message: "Disciplina deletada com sucesso." });
        }

        return res.status(404).json({error: "Disciplina não encontrada." });
    };