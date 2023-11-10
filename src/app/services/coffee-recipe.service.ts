import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CoffeeRecipe } from '../models/coffee-recipe';
import { Observable } from 'rxjs';
import { CoffeeRecipeList } from '../models/coffee-recipe-list';

@Injectable({
  providedIn: 'root'
})
export class CoffeeRecipeService {
  private readonly httpClient = inject(HttpClient);

  getCoffees(): Observable<CoffeeRecipeList> {
    return this.httpClient.get<CoffeeRecipeList>(`assets/mock-api/coffees.json`)
  }

  getCoffee(id: CoffeeRecipe['id']): Observable<CoffeeRecipe> {
    return this.httpClient.get<CoffeeRecipe>(`assets/mock-api/coffee/${id}.json`)
  }
}
