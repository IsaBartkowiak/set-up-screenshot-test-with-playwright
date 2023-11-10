import { CoffeeRecipe } from './coffee-recipe';

export type CoffeeRecipeList = Pick<CoffeeRecipe, 'id' | 'title' | 'description' | 'image' | 'category'>[];


