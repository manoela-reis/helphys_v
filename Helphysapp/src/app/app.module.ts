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

import { CalendarModule } from 'ionic3-calendar';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import {IonicStorageModule} from '@ionic/storage';

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
    DatasPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
<<<<<<< HEAD
<<<<<<< HEAD
    IonicStorageModule.forRoot({name: '_mydb'}),
    HttpModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule
    
=======
    CalendarModule,
    IonicStorageModule.forRoot()
>>>>>>> origin/master
=======
    IonicStorageModule.forRoot()
>>>>>>> parent of becb242... Login
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
    DatasPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}