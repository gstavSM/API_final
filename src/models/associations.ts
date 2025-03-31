import { Aluno } from "./Aluno";
import { Disciplina } from "./Disciplina";
import { AlunoDisciplina } from "./AlunoDisciplina";

Aluno.belongsToMany(Disciplina, {
    trough: AlunoDisciplina,
    foreignKey: "alunoId"
});

Disciplina.belongsToMany(Aluno, {
    through: AlunoDisciplina,
    foreignKey: "alunoId"
});

console.log("Relações entre models configuradas");