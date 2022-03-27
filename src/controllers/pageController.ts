import { Request, Response } from "express";

import {createMenuObject} from '../helpers/craeteMenuObject';
import { Pet } from '../models/pet';
//exportando pagina home

export const home = (req: Request, res: Response) => {
  let list = Pet.getAll();

  res.render('pages/page', {
    menu: createMenuObject('all'),
    banner:{
      title: 'Todos os Animais',
      background: 'allanimals.jpg'
    },
    list
  });
}

//exportando  a pagina dogs
export const dogs = (req: Request, res: Response) => {
    let list = Pet.getFromType('dog'); 

  res.render('pages/page', {
    menu: createMenuObject('dog'),
    banner:{
      title: 'Cachorros',
      background: 'banner_dog.jpg'
    },
    list
  });
}

//exportando a pagina cats
export const cats = (req: Request, res: Response) => {
  let list = Pet.getFromType('cat'); 


  res.render('pages/page', {
    menu: createMenuObject('cat'),
    banner:{
      title: 'Gatos',
      background: 'banner_cat.jpg'
    },
    list
  });
}

//exportando a pagina fiches
export const fishes = (req: Request, res: Response) => {
  let list = Pet.getFromType('fish');

  res.render('pages/page', {
    menu: createMenuObject('fish'),
    banner:{
      title: 'peixes',
      background: 'banner_fish.jpg'
    },
    list
  });
}