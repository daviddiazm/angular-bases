import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from "uuid";

@Injectable({providedIn: 'root'})
export class DbzService {

  characterList: Character[] = [
    {
      id: uuid(),
      name: "Krilon",
      power: 123
    },
    {
      id: uuid(),
      name: "Goku",
      power: 9999
    },
    {
      id: uuid(),
      name: "Bulba",
      power: 9932
    },
    {
      id: uuid(),
      name: "Androide 56",
      power: 932
    }
  ]

  addCharacter (character : Character) : void {
    const newCharacter: Character = {id: uuid(),...character}
    this.characterList.push(newCharacter)
  }

  // onDeleteCharacter(index: number) {
  //   this.characterList.splice(index,1)
  // }
  deleteCharacterById(id?: string) {
    if( !id ) return;
    this.characterList = this.characterList.filter((character) => character.id !== id )
  }

  constructor() { }

}
