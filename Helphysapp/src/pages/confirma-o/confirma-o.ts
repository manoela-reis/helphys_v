import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PacienteEscolhidoPage } from '../paciente-escolhido/paciente-escolhido';
import { SeleODeExercCiosPage } from '../sele-ode-exerc-cios/sele-ode-exerc-cios';
import { HelphysPage } from '../helphys/helphys';
import { ExercCioPage } from '../exerc-cio/exerc-cio';
import { DVidaPage } from '../d-vida/d-vida';
import { DatasPage } from '../datas/datas';

@Component({
  selector: 'page-confirma-o',
  templateUrl: 'confirma-o.html'
})
export class ConfirmaOPage {

  constructor(public navCtrl: NavController) {
  }
  goToPacienteEscolhido(params){
    if (!params) params = {};
    this.navCtrl.push(PacienteEscolhidoPage);
  }goToSeleODeExercCios(params){
    if (!params) params = {};
    this.navCtrl.push(SeleODeExercCiosPage);
  }goToConfirmaO(params){
    if (!params) params = {};
    this.navCtrl.push(ConfirmaOPage);
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
