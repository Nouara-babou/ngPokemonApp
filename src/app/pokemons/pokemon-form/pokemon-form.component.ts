import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from 'src/app/pokemon';
import { PokemonsService } from '../pokemons.service';
@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrls: ['./pokemon-form.component.scss']
})
export class PokemonFormComponent implements OnInit {

  constructor(private router: Router, private pokemonService: PokemonsService) { }
  types: Array<string> = [];
  @Input() pokemon: Pokemon = {}; // propriété d'entrée du composant
  ngOnInit(): void {
    this.types = this.pokemonService.getPokemonTypes();
  }

  hasType(type: string): boolean{
    // @ts-ignore
    const  index = this.pokemon.types.indexOf(type);
    return (index > -1) ? true : false;
  }

  selectType($event: any, type: string): void{
    const checked = $event.target.checked;
    if (checked){
      // @ts-ignore
      this.pokemon.types.push(type);
    } else {
      // @ts-ignore
      const index = this.pokemon.types.indexOf(type);

      if (index > -1){
        // @ts-ignore
        this.pokemon.types.splice(index, 1);
      }
    }
  }
  /**
   * methode appelée lorsque le formulaire est soumis
   */
  onSubmit(): void {
    console.log('Submit form');
    const link = ['/pokemon',this.pokemon.id];
    this.router.navigate(link);


  }

  goBack(): void {
    const link = ['pokemon/', this.pokemon.id];
    this.router.navigate(link);
  }
  // valide le nombre de types pour chaque pokémon
  isTypesValid(type: string): boolean{
    if (this.pokemon.types?.length === 1 && this.hasType(type)) {
      return false;
    }
    if (this.pokemon.types?.length === 3 && !this.hasType(type)) {
      return false;
    }
    return true;
  }

}

