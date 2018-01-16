import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CadastroPage } from '../cadastro/cadastro';
import { HelphysPage } from '../helphys/helphys';
import {Storage} from'@ionic/storage';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  
  constructor(private storage:Storage){}
  /*goToCadastro(params){
    if (!params) params = {};
    this.storage.push(CadastroPage);
  }
  goToHelphys(params){
    if (!params) params = {};
    this.storage.push(HelphysPage);
  }*/
  
}
