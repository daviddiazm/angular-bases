import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  heroesName: string[] =["Spiderman","Iron Man","Hulk","Thor"];
  deleteLastHero ?: string;

  removeLastHero(): void {
    this.deleteLastHero = this.heroesName.pop();
  }
}
