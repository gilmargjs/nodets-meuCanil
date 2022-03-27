import express from 'express';
import dotenv from 'dotenv';
import mustache from 'mustache-express';
import path from 'path';
import mainRoutes from './routes/index';

dotenv.config();

//CONFIGURANDO SERVIDOR
const server = express();

//servidor
server.set('view engine', 'mustache');
//onde vai ficar as pastas
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustache());
//configurar a pasta public
server.use(express.static(path.join(__dirname, '../public')));

//rota main
server.use(mainRoutes);

//rota não encontrada
server.use((req, res)=>{
  res.render('pages/404')
});

//Rotas

server.listen(process.env.PORT);