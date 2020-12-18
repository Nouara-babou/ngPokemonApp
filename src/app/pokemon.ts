// le modéle de notre application ou on va définir les attributs nécessaires à nos pokemons
// c'est une classe
export class Pokemon {
  id?: number;
  hp?: number;
  cp?: number;
  name?: string;
  picture?: string;
  types?: Array<string>;
  created?: Date;
}
