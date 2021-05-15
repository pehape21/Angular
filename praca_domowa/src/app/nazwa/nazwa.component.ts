import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nazwa',
  templateUrl: './nazwa.component.html',
  styleUrls: ['./nazwa.component.css']
})
export class FootballClub implements OnInit {

  name: string;
  country: string;
  age: number;
  game: game;
  player: string[];
  editData = false;

  constructor() { }

  ngOnInit(): void {
    this.name = 'Atletico Madryt';
    this.country = 'Hiszpania';
    this.age = 1903;
    this.game ={
      la_liga: 10,
      copa_del_rey: 10,
      supercopa_de_espana: 5,
      champions_legaue: 0,
      europe_league: 3,
      europe_supercup: 3,
    };
    this.player = [];
  }

  addPlayer(person): void{
    this.player.push(person);
  }
  deletePlayer(person): void{
    for(let i=0; i<this.player.length; i++)
    {
      if(this.player[i]===person){
        this.player.splice(i,1);
      }
    }
  }

  EditData(): void{
    this.editData = !this.editData;
  }

}
interface game{
  la_liga: number;
  copa_del_rey: number;
  supercopa_de_espana: number;
  champions_legaue: number;
  europe_league: number;
  europe_supercup: number;
}
