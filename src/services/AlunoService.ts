import { Aluno } from "../models/Aluno";
import { Notas } from "../models/Notas";
import { Disciplinas } from "../models/Disciplinas";
import { Op, fn, col, literal } from "sequelize";

export class AlunosService {
  
  static async buscarPorId(alunoId: number) {
    return Aluno.findByPk(alunoId);
  }

  static async buscarNotasComMediaPorDisciplina(alunoId: number) {
    const mediasPorDisciplina = await Notas.findAll({
      attributes: [
        "disciplinaId",
        [fn("AVG", col("nota")), "media"],
        [fn("COUNT", col("id")), "qtdNotas"],
      ],
      where: { alunoId },
      group: ["disciplinaId"],
      include: [
        {
          model: Disciplina,
          attributes: ["id", "nome"],
        },
      ],
    });

    // Formata o resultado para JSON:
    return mediasPorDisciplina.map((registro: any) => ({
      disciplinaId: registro.disciplinaId,
      disciplinaNome: registro.Disciplina.nome,
      media: parseFloat(Number(registro.getDataValue("media")).toFixed(2)),
      qtdNotas: registro.getDataValue("qtdNotas"),
    }));
  }
}
