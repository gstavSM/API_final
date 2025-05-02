import { Aluno } from "./Aluno";
import { Disciplinas } from "./Disciplinas";
import { AlunoDisciplina } from "./AlunoDisciplina";

Aluno.belongsToMany(Disciplinas, {
    through: AlunoDisciplina,
    foreignKey: "alunoId"
});

Disciplinas.belongsToMany(Aluno, {
    through: AlunoDisciplina,
    foreignKey: "alunoId"
});



console.log("Relações entre models configuradas");