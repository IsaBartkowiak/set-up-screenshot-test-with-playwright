import { ChangeDetectionStrategy, Component, inject, Signal } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CoffeeItemComponent } from './coffee-item/coffee-item.component';
import { toSignal } from '@angular/core/rxjs-interop';
import { CoffeeRecipeService } from '../services/coffee-recipe.service';
import { CoffeeRecipeList } from '../models/coffee-recipe-list';

@Component({
  selector: 'app-coffee-list',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NgOptimizedImage, CoffeeItemComponent],
  templateUrl: './coffee-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoffeeListComponent {
  private readonly coffeeRecipeService = inject(CoffeeRecipeService);
  coffeeRecipes: Signal<CoffeeRecipeList | undefined> = toSignal(this.coffeeRecipeService.getCoffees());
}
