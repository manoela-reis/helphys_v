import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { CadastroPage } from '../cadastro/cadastro';
import { HelphysPage } from '../helphys/helphys';
import {AuthProvider} from '../../providers/auth/auth';
import * as firebase from 'firebase';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [AuthProvider]
})
export class LoginPage {

  public email: string;
  public password: string;

  
  constructor(public usersService : AuthProvider, 
    public loadingCtrl: LoadingController, 
    public toastCtrl: ToastController,  
    public navCtrl: NavController, public navParams: NavParams){
    }
  goToCadastro(params){
    if (!params) params = {};
    this.navCtrl.push(CadastroPage);
  }
  submitLogin(){
    
        var that = this;
        
        var loader = this.loadingCtrl.create({
              content: "Please wait..."
            });
            loader.present();
        
        
            
            this.usersService.loginUser(this.email, this.password).then(authData => {
              //successful
              loader.dismiss();
              that.navCtrl.setRoot(HelphysPage);
        
            }, error => {
        loader.dismiss();
             // Unable to log in
              let toast = this.toastCtrl.create({
                message: error,
                duration: 3000,
                position: 'top'
              });
              toast.present();
        
        that.password = ""//empty the password field
        
            });
        
        
      }
  /*goToHelphys(params){
    if (!params) params = {};
    this.storage.push(HelphysPage);
  }*/
  
}