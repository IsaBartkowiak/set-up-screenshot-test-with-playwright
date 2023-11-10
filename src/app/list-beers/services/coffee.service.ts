import { effect, inject, Injectable, Signal, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { toSignal } from '@angular/core/rxjs-interop';
import { CoffeeType } from '../models/coffee.type';
import { Coffee } from '../models/coffee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoffeeService {
  readonly API_BASE_URL = 'https://api.sampleapis.com/coffee';
  private readonly httpClient = inject(HttpClient);

  getCoffees(coffeeType: CoffeeType): Observable<Coffee[]>   {
    return this.httpClient.get<Coffee[]>(`${this.API_BASE_URL}/${coffeeType}`)
  }
}
