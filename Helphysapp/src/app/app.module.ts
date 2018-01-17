import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HelphysPage } from '../pages/helphys/helphys';
import { PerfilPage } from '../pages/perfil/perfil';
import { RelatRiosPage } from '../pages/relat-rios/relat-rios';
import { SaibaMaisPage } from '../pages/saiba-mais/saiba-mais';
import { ReferNciasPage } from '../pages/refer-ncias/refer-ncias';
import { CrDitosPage } from '../pages/cr-ditos/cr-ditos';
import { ExercCioPage } from '../pages/exerc-cio/exerc-cio';
import { DVidaPage } from '../pages/d-vida/d-vida';
import { SeleODeExercCiosPage } from '../pages/sele-ode-exerc-cios/sele-ode-exerc-cios';
import { ConfirmaOPage } from '../pages/confirma-o/confirma-o';
import { TelaPacientePage } from '../pages/tela-paciente/tela-paciente';
import { PacienteEscolhidoPage } from '../pages/paciente-escolhido/paciente-escolhido';
import { DatasPage } from '../pages/datas/datas';
import {CadastroPage} from '../pages/cadastro/cadastro';
import {LoginPage} from '../pages/login/login';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import * as firebase from 'firebase';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import { AuthProvider } from '../providers/auth/auth';
import { HttpModule } from '@angular/http';
import { TrocarSenhaPage } from '../pages/trocar-senha/trocar-senha';


// Initialize Firebase
var config = {
  apiKey: "AIzaSyBMGPgXjOuRp7owlyuE5LHf14w3ZKZqz_g",
  authDomain: "helphys-teste.firebaseapp.com",
  databaseURL: "https://helphys-teste.firebaseio.com",
  projectId: "helphys-teste",
  storageBucket: "helphys-teste.appspot.com",
  messagingSenderId: "530901301923"
};
firebase.initializeApp(config);

@NgModule({
  declarations: [
    MyApp,
    HelphysPage,
    PerfilPage,
    RelatRiosPage,
    SaibaMaisPage,
    ReferNciasPage,
    CrDitosPage,
    ExercCioPage,
    DVidaPage,
    SeleODeExercCiosPage,
    ConfirmaOPage,
    CadastroPage,
    TelaPacientePage,
    PacienteEscolhidoPage,
    LoginPage,
    TrocarSenhaPage,
    DatasPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelphysPage,
    PerfilPage,
    RelatRiosPage,
    SaibaMaisPage,
    ReferNciasPage,
    CrDitosPage,
    ExercCioPage,
    DVidaPage,
    SeleODeExercCiosPage,
    ConfirmaOPage,
    TelaPacientePage,
    PacienteEscolhidoPage,
    CadastroPage,
    LoginPage,
    TrocarSenhaPage,
    DatasPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider
  ]
})
export class AppModule {}