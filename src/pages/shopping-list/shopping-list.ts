import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { Ingredient } from '../../modals/ingredients';
import { ShoppingListService } from '../../services/shopping-list';

@IonicPage()
@Component({
  selector: 'page-shopping-list',
  templateUrl: 'shopping-list.html',
})
export class ShoppingListPage {
  listItems:Ingredient[];
  
  constructor(public slService:ShoppingListService
    ,public navCtrl: NavController, public navParams: NavParams) {
  }
  ionViewWillEnter()
  {
    this.loadItems();
  }
  onAddItem(form:NgForm)
  {
    this.slService.addItem(form.value.malzemeler,form.value.miktar);
    form.reset();
    this.loadItems();
  }
  private loadItems()
  {
    this.listItems=this.slService.getItems();
  } 
  private onCheckItem(index:number)
  {
    this.slService.removeItem(index);
    this.loadItems();
  }

}
