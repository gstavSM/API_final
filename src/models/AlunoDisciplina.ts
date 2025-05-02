import { Model, DataTypes } from "sequelize";
import { sequelize } from "../instances/mysql";
import { Aluno } from "./Aluno";
import { Disciplinas } from "./Disciplinas";

export class AlunoDisciplina extends Model {
  public id!: number;
  public alunoId!: number | null;
  public disciplinaId!: number | null;
}

AlunoDisciplina.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
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
  },
  {
    sequelize,
    tableName: "aluno_disciplinas",
    timestamps: true,
    paranoid: true,
  }
);