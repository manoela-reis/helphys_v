import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { RelatRiosPage } from '../pages/relat-rios/relat-rios';
import { SaibaMaisPage } from '../pages/saiba-mais/saiba-mais';
import { ReferNciasPage } from '../pages/refer-ncias/refer-ncias';
import { CrDitosPage } from '../pages/cr-ditos/cr-ditos';
import { PerfilPage } from '../pages/perfil/perfil';
import { ExercCioPage } from '../pages/exerc-cio/exerc-cio';
import { DVidaPage } from '../pages/d-vida/d-vida';
import { CadastroPage} from '../pages/cadastro/cadastro';
import {LoginPage} from '../pages/login/login';

import { HelphysPage } from '../pages/helphys/helphys';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;
    rootPage:any = HelphysPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  goToRelatRios(params){
    if (!params) params = {};
    this.navCtrl.setRoot(RelatRiosPage);
  }goToSaibaMais(params){
    if (!params) params = {};
    this.navCtrl.setRoot(SaibaMaisPage);
  }goToReferNcias(params){
    if (!params) params = {};
    this.navCtrl.setRoot(ReferNciasPage);
  }goToCrDitos(params){
    if (!params) params = {};
    this.navCtrl.setRoot(CrDitosPage);
  }goToPerfil(params){
    if (!params) params = {};
    this.navCtrl.setRoot(PerfilPage);
  }goToHelphys(params){
    if (!params) params = {};
    this.navCtrl.setRoot(HelphysPage);
  }goToExercCio(params){
    if (!params) params = {};
    this.navCtrl.setRoot(ExercCioPage);
  }goToDVida(params){
    if (!params) params = {};
    this.navCtrl.setRoot(DVidaPage);
  }
  goToLogin(params){
    if (!params) params = {};
    this.navCtrl.setRoot(LoginPage);
  }
}
