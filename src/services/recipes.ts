import { Recipe } from "../modals/recipe";
import { Ingredient } from "../modals/ingredients";

export class RecipeServices
{
    private recipes:Recipe[]=[];

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

}