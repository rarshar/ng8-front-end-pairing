import { Component } from '@angular/core';
import { pokemonData } from './Data/pokemon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  private pokemon;

  public constructor()  {
    this.pokemon = pokemonData;
  }


  add() {
    console.log('clicked add()');
  }
}
