import { Injectable } from '@angular/core';
import {Pokemon} from '../pokemon' ;
import {POKEMONS} from '../shared/list.pokemons';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  constructor() { }
  getListPokemons (): Pokemon[] {
    return POKEMONS;
  }


getSinglePokemon(id: number): Pokemon {
    const listPKm = this.getListPokemons();
    for (let i = 0; i< listPKm.length; i++) {
      if(id == listPKm[i].id) {
        return listPKm[i];
      }
    }
    // to fix  error : Function lacks ending return statement and return type does not include 'undefined'.
    // réference https://stackoverrun.com/fr/q/12733495
    throw new Error("Shouldn't be reachable")

  }

  IsPokemonFound(id: number): boolean {
    const listPKm = this.getListPokemons();
        for (let i = 0; i< listPKm.length; i++) {
          if(id == listPKm[i].id) {
            return true;
          }
        }
        return false;
   }


}

