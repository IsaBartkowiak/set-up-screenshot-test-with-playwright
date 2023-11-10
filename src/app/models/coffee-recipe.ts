import { CoffeeRecipeCategory } from './coffee-recipe-category';
import { CoffeeRecipeSteps } from './coffee-recipe-steps';
import { CoffeeRecipeRating } from './coffee-recipe-rating';
import { CoffeeRecipePreparation } from './coffee-recipe-preparation';

export interface CoffeeRecipe {
  id: string;
  title: string;
  description: string;
  image: string;
  category: CoffeeRecipeCategory;
  ingredients: string[];
  steps: CoffeeRecipeSteps[];
  rating: CoffeeRecipeRating;
  preparation: CoffeeRecipePreparation;
}


