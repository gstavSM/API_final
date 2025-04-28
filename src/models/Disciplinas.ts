import { Model, DataTypes } from "sequelize";
import { sequelize } from "../instances/mysql";
import { Professores } from "./Professores";

export class  Disciplinas extends Model {
    public id!: number;
    public nome!: string;
    public professorId!: number;

}

Disciplinas.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nome: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      professorId: {
         type: DataTypes.INTEGER,
          allowNull: true,
          references: {
            model: Professores,
            key: "id",
          },
          onDelete: "CASCADE",
        },  
    },

    {
      sequelize,
      tableName: "disciplinas",
      timestamps: true,
      paranoid: true,
    }
)