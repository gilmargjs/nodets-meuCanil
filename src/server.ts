import express from 'express';
import dotenv from 'dotenv';
import mustache from 'mustache-express';
import path from 'path';
import mainRoutes from './routes/index';

dotenv.config();

const server = express();

server.set('view engine', mustache);
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustache());

server.use(express.static(path.join(__dirname, '../public')));

//rota main
server.use(mainRoutes);

//rota não encontrada
server.use((req, res)=>{
  res.send('Pagina Não Encontrada!')
});

//Rotas

server.listen(process.env.PORT);