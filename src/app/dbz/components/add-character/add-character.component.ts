import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {
      //emitir al padre
  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();



  public character: Character = {
    name: '',
    power: 0
  };

  public emitCharacter(): void{
    // debugger;
    if(this.character.name.length === 0){
      return;
    }
    //emitir al padre
    this.onNewCharacter.emit(this.character);
    // console.log(this.character);
    // this.character.power = 0;
    // this.character.name = '';
    this.character = {name: '', power: 0};
  }
}
