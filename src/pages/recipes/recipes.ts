import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EditRecipePage } from '../edit-recipe/edit-recipe';
import { Recipe } from '../../modals/recipe';
import { RecipeServices } from '../../services/recipes';
import { RecipePage } from '../recipe/recipe';


@IonicPage()
@Component({
  selector: 'page-recipes',
  templateUrl: 'recipes.html',
})
export class RecipesPage {

  recipes:Recipe[];
  constructor(private navCtrl:NavController,
    private recipeService:RecipeServices) {
  }
  ionViewWillEnter()
  {
    this.recipes=this.recipeService.getRecipes();
  }
  onNewRecipe()
  {
    this.navCtrl.push(EditRecipePage,{mode:'Ekle'});
  }
  onLoadRecipe(recipe:Recipe,index:number)
  {
    this.navCtrl.push(RecipePage,{recipe:recipe,index:index});
  }

}
