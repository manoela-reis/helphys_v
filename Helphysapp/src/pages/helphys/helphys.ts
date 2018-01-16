import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ExercCioPage } from '../exerc-cio/exerc-cio';
import { DVidaPage } from '../d-vida/d-vida';
import { CadastroPage } from '../cadastro/cadastro';

@Component({
  selector: 'page-helphys',
  templateUrl: 'helphys.html'
})
export class HelphysPage {

  constructor(public navCtrl: NavController) {
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
