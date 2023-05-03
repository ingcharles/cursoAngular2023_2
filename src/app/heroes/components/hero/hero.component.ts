import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name: string = 'iroman';
  public age: number = 35;

  get capitalizeName(): string {
    return this.name.toUpperCase();
  }

  public getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  public changeHero(): void {
    this.name = "Spiderman"
  }

  public changeAge(): void {
    this.age = 30;
  }

  resetForm(): void {
  this.name = 'iroman';
  this.age = 35;
 // document.querySelector('h1')!.innerHTML='<h1>Desde Angular</h1>';
  // document.querySelectorAll('h1')!.forEach(element =>{
  //   element.innerHTML='<h1>Desde Angular</h1>';
  // });
    
}
}
