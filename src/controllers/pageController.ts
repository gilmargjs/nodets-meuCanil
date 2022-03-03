import { Request, Response } from "express";
import { rmSync } from "fs";
 
//exportando pagina home
export const home = (req: Request, res: Response)=>{
  res.send('home do controler');
}

//exportando  a pagina dogs
export const dogs = (req: Request, res: Response)=>{
  res.send('pagina dogs')
  // res.render('cachorros');
}

//exportando a pagina cats
export const cats = (req: Request, res: Response)=>{
  res.send('pagina cats')
  res.render('gatos');
}

//exportando a pagina fiches
export const fiches = (req: Request, res: Response)=>{
  res.send('pagina fiches')
  res.render('peixes');
}