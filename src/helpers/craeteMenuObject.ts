//tipo para receber só os itens especificados
type MenuOptions = '' | 'all' | 'dog' | 'cat' | 'fish';

//expotando createMenuObject
export const createMenuObject = (activeMenu: MenuOptions) => {

  let returnObject = {
    all: false,
    dog: false,
    cat: false,
    fish: false
  };
  //se activeMenu for diferente de ''
  //retorne verdadeiro 
  if (activeMenu !== '') {
    returnObject[activeMenu] = true;
  }

  return returnObject;


}