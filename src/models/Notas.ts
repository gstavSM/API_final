import { Model, DataTypes } from "sequelize";
import { sequelize } from "../instances/mysql";
import { Aluno } from "./Aluno";
import { Disciplinas } from "./Disciplinas";

export class Notas extends Model {
  public Id!: number;
  public alunoId!: number;
  public disciplinaId!: number;
}

Notas.init(
  {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    alunoId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Aluno,
        key: "id",
      },
      onDelete: "CASCADE",
    },
    disciplinaId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Disciplinas,
        key: "id",
      },
      onDelete: "CASCADE",
    },
  },
  {
    sequelize,
    tableName: "notas",
    timestamps: true,
    paranoid: true,
  }
);