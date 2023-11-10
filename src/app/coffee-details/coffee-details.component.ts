import { ChangeDetectionStrategy, Component, inject, Input, OnInit, signal, WritableSignal } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { finalize, take, tap } from 'rxjs';
import { CoffeeRecipeService } from '../services/coffee-recipe.service';
import { CoffeeRecipe } from '../models/coffee-recipe';
import { CoffeeRatingComponent } from './coffee-rating/coffee-rating.component';
import { CoffeeStepsComponent } from './coffee-steps/coffee-steps.component';
import { CoffeeIngredientsComponent } from './coffee-ingredients/coffee-ingredients.component';
import { CoffeePreparationComponent } from './coffee-preparation/coffee-preparation.component';

@Component({
  selector: 'app-coffee-details',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NgOptimizedImage, RouterLink, CoffeeRatingComponent, CoffeeStepsComponent, CoffeeIngredientsComponent, CoffeePreparationComponent],
  templateUrl: './coffee-details.component.html',
  styleUrls: ['./coffee-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoffeeDetailsComponent implements OnInit {
  @Input() id!: string;
  isLoading: WritableSignal<boolean> = signal(true);
  coffeeRecipe: WritableSignal<CoffeeRecipe | null> = signal(null);
  private readonly coffeeService = inject(CoffeeRecipeService);

  ngOnInit() {
    this.coffeeService.getCoffee(this.id).pipe(
      take(1),
      tap(coffee => this.coffeeRecipe.set(coffee)),
      finalize(() => this.isLoading.set(false)),
    ).subscribe()
  }
}
