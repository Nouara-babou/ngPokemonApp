import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute} from '@angular/router';
import { Pokemon } from '../../pokemon';
import {PokemonsService}  from '../pokemons.service';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styleUrls: ['./detail-pokemon.component.scss']
})
export class DetailPokemonComponent implements OnInit {
  listOfPokemons : Pokemon[] =[] ;
  PokemonToDisplay : Pokemon = {} ;


  constructor(private route: ActivatedRoute , private router: Router , private pokemonsservice: PokemonsService) { }

  ngOnInit(): void {
    this.listOfPokemons = this.pokemonsservice.getListPokemons();
 // Récuperer le param de la route associé à mon composant avec l'injection
 // des dépendances
 // snapshot pour dire que recuperer le param d'une maniere  synchrone
    const id = +this.route.snapshot.paramMap?.get('id')!;
    this.PokemonToDisplay = this.pokemonsservice.getSinglePokemon(id);



  }

   back(): void {
      this.router.navigate(['/pokemon'])
    }
    editerPokemon(pokemonToEdit: Pokemon):void {
      const link = ['pokemon/edit', pokemonToEdit.id];
      this.router.navigate(link);

    }

}
