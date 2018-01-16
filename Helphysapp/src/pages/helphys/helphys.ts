import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ExercCioPage } from '../exerc-cio/exerc-cio';
import { DVidaPage } from '../d-vida/d-vida';
import { CadastroPage } from '../cadastro/cadastro';
import {AuthProvider} from '../../providers/auth/auth';

@Component({
  selector: 'page-helphys',
  templateUrl: 'helphys.html'
})
export class HelphysPage {

  constructor(public navCtrl: NavController, private auth: AuthProvider) {
  }
  goToExercCio(params){
    if (!params) params = {};
    this.navCtrl.push(ExercCioPage);
  }goToDVida(params){
    if (!params) params = {};
    this.navCtrl.push(DVidaPage);
  }
  goToCadastro(params){
    if (!params) params = {};
    this.navCtrl.push(CadastroPage);
  }
}