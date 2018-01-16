import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController, ToastController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import * as firebase from 'firebase';
import { HelphysPage } from '../helphys/helphys';

@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
  providers: [AuthProvider]
})
export class CadastroPage {

  public email : string;
  public password : any;
  // public nome : any;
  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public authProvider : AuthProvider, 
    public toastCtrl: ToastController, public loadingCtrl: LoadingController) {
  }
  
  doSignup(){

    
        var   account = {
          
          email: this.email,          
          password: this.password,
          // nome : this.nome
    
        };
    var that = this;
    
    var loader = this.loadingCtrl.create({
          content: "Please wait...",
          
        });
        loader.present();
    
    
        this.authProvider.signupUserService(account).then(authData => {
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
    }