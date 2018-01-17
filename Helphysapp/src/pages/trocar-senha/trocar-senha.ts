import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthProvider } from '../../providers/auth/auth';
import { EmailValidator } from '../../validators/email';


@IonicPage()
@Component({
  selector: 'page-trocar-senha',
  templateUrl: 'trocar-senha.html',
})
export class TrocarSenhaPage {

  public resetPasswordForm:FormGroup;

  constructor(public authData: AuthProvider, public formBuilder: FormBuilder, 
              public navCtrl: NavController, public navParams: NavParams, 
              public alertCtrl: AlertController) {

            this.resetPasswordForm = formBuilder.group({
                email: ['', Validators.compose([Validators.required, EmailValidator.isValid])],
            })
  }

  resetPassword(){
    if (!this.resetPasswordForm.valid){
      console.log(this.resetPasswordForm.value);
    } else {
      this.authData.resetPassword(this.resetPasswordForm.value.email)
      .then((user) => {
        let alert = this.alertCtrl.create({
          message: "Mandamos um link para seu e-mail.",
          buttons: [
            {
              text: "Ok",
              role: 'cancel',
              handler: () => {
                this.navCtrl.pop();
              }
            }
          ]
        });
        alert.present();
      }, (error) => {
        var errorMessage: string = error.message;
        let errorAlert = this.alertCtrl.create({
          message: errorMessage,
          buttons: [
            {
              text: "Ok",
              role: 'cancel'
            }
          ]
        });
        errorAlert.present();
      });
    }
  }

}
