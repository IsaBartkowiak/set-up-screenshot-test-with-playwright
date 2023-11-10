import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoffeeRecipeSteps } from '../../models/coffee-recipe-steps';

@Component({
  selector: 'app-coffee-steps',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './coffee-steps.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoffeeStepsComponent {
  @Input({required: true}) steps!: CoffeeRecipeSteps[];
}
