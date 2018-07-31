import { Component } from '@angular/core';
import { IonicPage, LoadingController, AlertCmp, AlertController } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/AuthService';


@IonicPage()
@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {
  constructor(private authService:AuthService,
    private loadingCtrl:LoadingController,
    private alertCtrl:AlertController)
  {

  }
 
  onSignin(form:NgForm)
  {
    const loading=this.loadingCtrl.create(
      {
        content:'Giriş Başarılı'
      }
    );
    loading.present();
    this.authService.signin(form.value.email,form.value.password)
    .then(data=>{
     loading.dismiss();

    }).catch(error=>
      {
        loading.dismiss();
        const alertCtrl=this.alertCtrl.create(
          {
            title:'Giriş Başarısız!',
            message:error.message,
            buttons:['ok']
          }
        ) ;
        alertCtrl.present();
      }
    );
    
 
  }


}
