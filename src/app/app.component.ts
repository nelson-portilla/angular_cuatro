import { Component } from '@angular/core';

export class Hero {
  id: number;
  name: string;
}

const HEROES : Hero [] = [
  {id:11, name:'Superman'},
  {id:12, name:'Mujer maravilla'},
  {id:13, name:'Hulk'},
  {id:14, name:'Batman'},
  {id:15, name:'Flash'}
];

@Component({
  selector: 'my-app',
  template: `
          <h1>{{title}}</h1>
          <div *ngIf="SelectedHero">
            <h2>{{SelectedHero.name}} details!</h2>
            <div><label>id: </label>{{SelectedHero.id}}</div>
            <div><label>Digite un nombre: </label>
                  <input [(ngModel)]="SelectedHero.name" placeholder="name">
            </div>
          </div>
          <h2>Lista de Heroes</h2>
          <ul class="heroes">
            <li *ngFor="let hero of heroes"
            [class.selected]="hero === SelectedHero"
            (click)="onSelect(hero)">
              <span class="badge">{{hero.id}} </span>{{hero.name}}
            </li>
          </ul>
          `,
  styles: [`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .heroes {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .heroes li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .heroes li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .heroes li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .heroes .text {
      position: relative;
      top: -3px;
    }
    .heroes .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
    `]
})
export class AppComponent  {
  name = 'Angular';
  title = 'Tour of Heroes';
  SelectedHero : Hero;
  heroes = HEROES;
  onSelect(hero:Hero): void{
    this.SelectedHero = hero;
  }
}
