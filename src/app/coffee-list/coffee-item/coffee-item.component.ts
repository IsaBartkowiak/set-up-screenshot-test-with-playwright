import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CoffeeRecipeList } from '../../models/coffee-recipe-list';

@Component({
  selector: 'app-coffee-item',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './coffee-item.component.html',
  styleUrl: './coffee-item.component.scss'
})
export class CoffeeItemComponent {
  @Input({required: true}) coffeeRecipe!: CoffeeRecipeList[number];
}
