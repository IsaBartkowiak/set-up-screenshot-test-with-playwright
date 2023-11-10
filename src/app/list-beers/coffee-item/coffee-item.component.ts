import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Coffee } from '../models/coffee';

@Component({
  selector: 'app-coffee-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './coffee-item.component.html',
  styleUrl: './coffee-item.component.scss'
})
export class CoffeeItemComponent {
  @Input({required: true}) coffee!: Coffee;
  @Input({required: true}) isLoading!: boolean;
}
