import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  inject,
  Input,
  signal,
  Signal,
  WritableSignal
} from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CoffeeItemComponent } from './coffee-item/coffee-item.component';
import { CoffeeType } from './models/coffee.type';
import { CoffeeService } from './services/coffee.service';
import { Coffee } from './models/coffee';
import { toSignal } from '@angular/core/rxjs-interop';
import { finalize, tap } from 'rxjs';

@Component({
  selector: 'app-beer-list',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NgOptimizedImage, CoffeeItemComponent],
  templateUrl: './coffee-list.component.html',
  styleUrls: ['./coffee-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoffeeListComponent {
  @Input() set coffeeType(type: CoffeeType) {
    this.isLoading.set(true);
    this.coffeeService.getCoffees(type).pipe(
      tap((coffees) => this.coffees.set(coffees)),
      finalize(() => this.isLoading.set(false)),
    ).subscribe();
  }

  coffees: WritableSignal<Coffee[] | null> = signal(null);
  isLoading: WritableSignal<boolean> = signal(true);
  private readonly coffeeService = inject(CoffeeService);
}
