import { Component, OnInit } from '@angular/core';
import {POKEMONS} from '../../shared/list.pokemons';
import { Router,ActivatedRoute} from '@angular/router';
import { Pokemon } from '../../pokemon';
@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styleUrls: ['./detail-pokemon.component.scss']
})
export class DetailPokemonComponent implements OnInit {
  listOfPokemons : Pokemon[] =[] ;
  PokemonToDisplay : Pokemon = {} ;

  constructor(private route: ActivatedRoute , private router: Router) { }

  ngOnInit(): void {
    this.listOfPokemons = POKEMONS ;
 // Récuperer le param de la route associé à mon composant avec l'injection
 // des dépendances
 // snapshot pour dire que recuperer le param d'une maniere  synchrone
    const id = +this.route.snapshot.paramMap?.get('id')!;
    for (let i = 0; i< this.listOfPokemons.length; i++){

       if(this.listOfPokemons[i].id == id){
           this.PokemonToDisplay = this.listOfPokemons[i];
       }

    }

  }

   back(): void {
      this.router.navigate(['/pokemon'])
    }

}
