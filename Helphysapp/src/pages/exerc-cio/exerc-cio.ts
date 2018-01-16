import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DVidaPage } from '../d-vida/d-vida';

@Component({
  selector: 'page-exerc-cio',
  templateUrl: 'exerc-cio.html'
})
export class ExercCioPage {

  constructor(public navCtrl: NavController) {
  }
  goToDVida(params){
    if (!params) params = {};
    this.navCtrl.push(DVidaPage);
  }
}
