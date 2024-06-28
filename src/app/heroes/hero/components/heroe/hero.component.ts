import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  name: string = "Iron Man";
  age:  number = 34;


  get capitalizeName():string {
    return this.name.toUpperCase()
  }

  get heroDescription(): string {
    return `${this.name} - ${this.age}`
  }

  changeHero (): void {
    this.name = "spiderman"
  }

  changeAge (): void {
    this.age = 25
  }

  resetForm(): void {
    this.name = "Iron Man";
    this.age = 45;
  }
}
