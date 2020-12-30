import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule  } from '@angular/forms';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { BorderCardDirective } from '../shared/directives/border-card.directive';
import { PokemonTypeColorPipe } from '../shared/pipes/pokemon-type-color.pipe';
import { PokemonFormComponent } from './pokemon-form/pokemon-form.component';
import { PokemonEditComponent } from './pokemon-edit/pokemon-edit.component';


@NgModule({
  declarations: [
   ListPokemonComponent,
   DetailPokemonComponent,
   BorderCardDirective,
   PokemonTypeColorPipe,
   PokemonFormComponent,
   PokemonEditComponent
  ],
  imports: [
    // permet d'importer les dircetives comme ngfor et ngIf
    CommonModule,
     FormsModule
  ]
})
export class PokemonsModule { }
