import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Pokemon} from '../../pokemon' ;
import {POKEMONS} from '../../shared/list.pokemons';


@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrls: ['./list-pokemon.component.scss']
})
export class ListPokemonComponent implements OnInit {

pokemons : Pokemon[] = [];

  constructor(private router : Router) { }

  ngOnInit(): void {
    this.pokemons = POKEMONS;
  }
  selectPokemon(pokemon:Pokemon): void {
     //alert("vous avez cliqué sur le pokemon"+pokemon.name);
     const link = ['/pokemon',pokemon.id]
     this.router.navigate(link);
    }

}
