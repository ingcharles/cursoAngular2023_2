import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { Character } from '../interfaces/character.interface';

// console.log(uuid());
@Injectable({
  providedIn: 'root'
})
export class DbzService {

  constructor() { }

  public characters: Character[] = [{
    id: uuid(),
    name: 'Krillin',
    power: 9600
  }, {
    id: uuid(),
    name: 'Goku',
    power: 100
  }
    , {
    id: uuid(),
    name: 'Vegeta',
    power: 1050
  }
  ];

  addCharacter(character: Character): void {
    // onNewCharacter({name, power}: Character): void {
    // console.log("MainPage");
    // console.log(character);
    const newCharacter: Character = {
      id: uuid(), ...character
    };
    // name,
    // power,
    // name: character.name,
    // power: character.power,

    this.characters.push(character);
  }

  // onDeleteCharacter(index: number): void {
  deleteCharacterById(id: string) {
    this.characters = this.characters.filter(character => character.id !== id);

    // this.characters.splice(index, 1);
  }

}
