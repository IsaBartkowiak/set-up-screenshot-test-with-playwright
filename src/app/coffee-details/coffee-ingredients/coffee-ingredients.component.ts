import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-coffee-ingredients',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './coffee-ingredients.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoffeeIngredientsComponent {
  @Input({required: true}) ingredients!: string[];
}
