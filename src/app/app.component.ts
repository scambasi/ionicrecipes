import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { SigninPage } from '../pages/signin/signin';
import { SignupPage } from '../pages/signup/signup';

import firabase from 'firebase';
import { AuthService } from '../services/AuthService';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;
  signinPage=SigninPage;
  signupPage=SignupPage;
  isAuthenticated=false;
  @ViewChild('nav') nav:NavController;

  constructor(platform: Platform, 
    statusBar: StatusBar, splashScreen: SplashScreen,
    private menuCtrl:MenuController,
    private authSrvCtrl:AuthService) {
  firabase.initializeApp(
    {
      
      apiKey: "AIzaSyAmXqbbPnFytefF7yuzMV7gkR9ZgaByxIo",
      authDomain: "yemektariflerim-e8ca5.firebaseapp.com"
    
    }
  );
  firabase.auth().onAuthStateChanged(
    user=>
    {
      if(user)
      {
        this.isAuthenticated=true;
       this.rootPage=TabsPage;

      }else
      {
        this.isAuthenticated=false;
        this.rootPage=SigninPage;
      }
    }
  );

    platform.ready().then(() =>
    {
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  onLoad(page:any)
  {
   this.nav.setRoot(page);
   this.menuCtrl.close();
  }
  onLogout()
  {
    this.authSrvCtrl.logout();
    this.menuCtrl.close();
    this.nav.setRoot(SigninPage);

  }
}

