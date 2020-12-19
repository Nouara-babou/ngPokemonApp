import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { PokemonsModule } from './pokemons/pokemons.module';
import { PokemonsService } from './pokemons/pokemons.service';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
  // module permet de lancer l'application
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    PokemonsModule
  ],
  providers: [PokemonsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
