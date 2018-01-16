import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ConfirmaOPage } from '../confirma-o/confirma-o';
import { PacienteEscolhidoPage } from '../paciente-escolhido/paciente-escolhido';
import { HelphysPage } from '../helphys/helphys';
import { ExercCioPage } from '../exerc-cio/exerc-cio';
import { DVidaPage } from '../d-vida/d-vida';
import { DatasPage } from '../datas/datas';

@Component({
  selector: 'page-sele-ode-exerc-cios',
  templateUrl: 'sele-ode-exerc-cios.html'
})
export class SeleODeExercCiosPage {

  constructor(public navCtrl: NavController) {
  }
  goToConfirmaO(params){
    if (!params) params = {};
    this.navCtrl.push(ConfirmaOPage);
  }goToPacienteEscolhido(params){
    if (!params) params = {};
    this.navCtrl.push(PacienteEscolhidoPage);
  }goToSeleODeExercCios(params){
    if (!params) params = {};
    this.navCtrl.push(SeleODeExercCiosPage);
  }goToHelphys(params){
    if (!params) params = {};
    this.navCtrl.push(HelphysPage);
  }goToExercCio(params){
    if (!params) params = {};
    this.navCtrl.push(ExercCioPage);
  }goToDVida(params){
    if (!params) params = {};
    this.navCtrl.push(DVidaPage);
  }goToDatas(params){
    if (!params) params = {};
    this.navCtrl.push(DatasPage);
  }
}
