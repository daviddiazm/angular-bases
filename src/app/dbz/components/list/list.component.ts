
import { Component, EventEmitter, Input, Output, input } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: `./list.component.html`,
  styleUrl: './list.component.css',
})
export class ListComponent {
  @Output()
  onDelete: EventEmitter<string> = new EventEmitter()

  @Input()
  characterList: Character[] =[]
  // pruebaList: Character[] = [{
  //   name: "Trunks",
  //   power: 1
  // }, {
  //   name: "Lulu",
  //   power: 888
  // }
  // ]

  onDeleteCharacter(id ?: string): void {
    // console.log(character);
    if(!id) return;
    this.onDelete.emit(id)
  }
}
