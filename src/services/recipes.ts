import { Injectable } from "@angular/core";

import { Recipe } from "../modals/recipe";
import { Ingredient } from "../modals/ingredients";
import { AuthService } from "./AuthService";
import { HttpClient } from "@angular/common/http";
import 'rxjs/Rx';

@Injectable()
export class RecipeServices
{
    private recipes:Recipe[]=[];
        constructor(private authService:AuthService,private http: HttpClient)
        {
            
        }
    addRecipe(title:string,description:string,
        difficulty:string,
        ingredients:Ingredient[])
    {
        this.recipes.push(new Recipe(title,description,difficulty,ingredients));
        console.log('added',this.recipes);
    }
    getRecipes()
    {
        return this.recipes.slice();
    }
    updateRecipe(index:number,title:string,description:string,
        difficulty:string,
        ingredients:Ingredient[])
    {
            this.recipes[index]=new Recipe(title,description,difficulty,ingredients);
            console.log('updated',this.recipes);
    }
    removeRecipe(index:number)
    {
        this.recipes.splice(index,1);
    }
    storeList(token:string)
    {
       const userId=this.authService.getActiveUser().uid;
       return this.http.put('https://yemektariflerim-e8ca5.firebaseio.com/'+userId+'/recipes.json?auth='
       +token,this.recipes); 
    }
    fetchList(token:string)
    {
        const userId=this.authService.getActiveUser().uid;
        return this.http.get('https://yemektariflerim-e8ca5.firebaseio.com/'
        +userId+'/recipes.json?auth='+token).
        map((response:Response)=>
      {
        const recipes:any=response.json()?response.json():[];
        for(let item of recipes)
        {
          if(!item.hasOwnProperty('ingredients'))
          {
            item.ingredients=[];
          }
        }
      return recipes;
      })
        do((recipes:any)=>{
            if(recipes)
            {
                this.recipes=recipes;

            }else
            {
                this.recipes=[];
            }
        });
    }

}