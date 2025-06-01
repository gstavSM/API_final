import express, { Request, Response, ErrorRequestHandler } from 'express';
import path from 'path';
import dotenv from 'dotenv';
import cors from 'cors';
//import apiRoutes from './routes/routes';
import { conectarBanco } from './instances/mysql';
import "./models/associations"
import allRoutes from "./routes";
// import AlunoRoutes from './routes/AlunoRoutes';
// import AlunoDisciplinaRoutes from './routes/AlunoDisciplinaRoutes';
// import CursoRoutes from './routes/CursoRoutes';
// import DisciplinaRoutes from './routes/DisciplinaRoutes';
// import NotasRoutes from './routes/NotasRoutes';
// import PresencaRoutes from './routes/PresencaRoutes';
// import ProfessoresRoutes from './routes/ProfessoresRoutes';

dotenv.config();

const server = express();

server.use(cors());
conectarBanco();
server.use(express.static(path.join(__dirname, '../public')));

// Definir o formato das requisições
server.use(express.json()); // Usando JSON

// Definir as rotas da API
server.use(allRoutes);
//server.use(apiRoutes);
// server.use("/alunos", AlunoRoutes);
// server.use("/alunoDisciplina", AlunoDisciplinaRoutes);
// server.use("/cursos", CursoRoutes);
// server.use("/disciplinas", DisciplinaRoutes);
// server.use("/notas", NotasRoutes);
// server.use("/presenças", PresencaRoutes);
// server.use("/professores", ProfessoresRoutes);


// Endpoint para caso o usuário acesse um caminho inexistente
server.use((req: Request, res: Response) => {
    res.status(404).json({ error: 'Endpoint não encontrado.' });
});

// Middleware de erro
const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
    console.error(err); // Exibe o erro no console
    res.status(400).json({ error: 'Ocorreu algum erro.' });
};
server.use(errorHandler);

// Iniciar o servidor e exibir a porta no console
const port = process.env.PORT || 3000; // Defina uma porta padrão se não estiver no .env
server.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});

export default server;