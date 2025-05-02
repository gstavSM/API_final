import { Model, DataTypes } from "sequelize";
import { sequelize } from "../instances/mysql";
import { Aluno } from "./Aluno";
import { Disciplinas } from "./Disciplinas";

export class Notas extends Model {
  public id!: number;
  public alunoId!: number;
  public disciplinaId!: number;
  public data!: Date;
  public nota!: number;
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
    nota: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: true,
    },
    data_avaliacao:{
      type: DataTypes.DATE,
      allowNull: true,
    }
  },
  {
    sequelize,
    tableName: "notas",
    timestamps: true,
    paranoid: true,
  }
);