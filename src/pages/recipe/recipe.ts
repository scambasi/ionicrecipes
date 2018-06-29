import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Recipe } from '../../modals/recipe';
import { EditRecipePage } from '../edit-recipe/edit-recipe';

@IonicPage()
@Component({
  selector: 'page-recipe',
  templateUrl: 'recipe.html',
})
export class RecipePage implements OnInit {

  recipe:Recipe;
  index:number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  ngOnInit()
  {
   this.recipe=this.navParams.get('recipe');
   this.index=this.navParams.get('index'); 
  }
  onEditRecipe()
  {
    this.navCtrl.push(EditRecipePage,{mode:'Güncelle',recipe:this.recipe,index:this.index}); 
    
  }
}
