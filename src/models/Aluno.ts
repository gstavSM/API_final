import { Model, DataTypes } from "sequelize";
import { sequelize } from "../instances/mysql";

export class Aluno extends Model {
    public id!: number;
    public nome!: string;
    public email!: string;
    public matricula!: string;
}

Aluno.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nome: {
            type: DataTypes.STRING, 
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false, 
        },
        matricula: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
        }
    },
    {
        sequelize,
        tableName: "alunos",
        timestamps: false, 
    }

    import { Request, Response } from 'express';
    import { Aluno } from '../models/Aluno';
    
    export const listarAlunos = async (req: Request, res: Response): Promise<Response> => {
        try {
            const alunos = await Aluno.findAll();
            return res.json(alunos);
        } catch (error) {
            console.error("Erro ao listar alunos:", error);
            return res.status(500).json({ error: "Erro ao listar alunos" });
        }
    };
    