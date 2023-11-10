import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoffeeRecipeRating } from '../../models/coffee-recipe-rating';

@Component({
  selector: 'app-coffee-rating',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './coffee-rating.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoffeeRatingComponent {
  @Input({required: true}) rating!: CoffeeRecipeRating;
}
