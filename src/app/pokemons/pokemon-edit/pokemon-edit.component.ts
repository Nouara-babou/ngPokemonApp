import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../pokemon';
import { ActivatedRoute} from '@angular/router';
import {PokemonsService}  from '../pokemons.service';

@Component({
  selector: 'app-pokemon-edit',
  templateUrl: './pokemon-edit.component.html',
  styleUrls: ['./pokemon-edit.component.scss']
})
export class PokemonEditComponent implements OnInit {
    singlePokemon : Pokemon = {};
  constructor(private route: ActivatedRoute  , private pokemonsservice: PokemonsService) { }

  ngOnInit(): void {
        const id = +this.route.snapshot.params.id;
        this.singlePokemon = this.pokemonsservice.getSinglePokemon(id);

  }

}
