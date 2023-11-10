import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoffeeRecipePreparation } from '../../models/coffee-recipe-preparation';

@Component({
  selector: 'app-coffee-preparation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './coffee-preparation.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoffeePreparationComponent {
  @Input({required: true}) preparation!: CoffeeRecipePreparation;
}
