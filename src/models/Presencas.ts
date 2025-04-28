import { Model, DataTypes } from "sequelize";
import { sequelize } from "../instances/mysql";
import { Aluno } from "./Aluno";
import { Disciplinas } from "./Disciplinas";
import { AllowNull } from "sequelize-typescript";

export class Presencas extends Model {
  public Id!: number;
  public alunoId!: number;
  public disciplinaId!: number;
  public data!: Date;
  public presente!: boolean; 
}

Presencas.init(
  {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    alunoId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: Aluno,
        key: "id",
      },
      onDelete: "CASCADE",
    },
    disciplinaId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: Disciplinas,
        key: "id",
      },
      onDelete: "CASCADE",
    },
    data: {
        type: DataTypes.DATE,
        allowNull: true,  
    },
    presente: {
        type: DataTypes.BOOLEAN,
        allowNull: true,

    }
  },
  {
    sequelize,
    tableName: "presencas",
    timestamps: true,
    paranoid: true,
  }
);