//importando request e response do express
import { Request, Response } from "express";
//importando pet dentro de models
import { Pet } from '../models/pet';
//importando createMenuObject de helpers
import { createMenuObject } from "../helpers/craeteMenuObject"; 

//exportando a constante de pesquisa
export const search = (req: Request, res: Response)=>{
  let query: string = req.query.q as string;

  if(!query){
    res.redirect('/');
    return;
  }

  let list = Pet.getFromName(query);

  //redenrizando a pagina pesquisa e mandando os itens
  res.render('pages/page', {
    menu: createMenuObject(''),
    list,
    query
  });
} 