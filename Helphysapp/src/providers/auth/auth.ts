import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import * as firebase from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';


@Injectable()
export class AuthProvider {

  public data: any;
  public fireAuth: any;
  public userProfile: any;

  constructor(
    public http: Http,
    private af: AngularFireAuth) {
      this.fireAuth = firebase.auth();
      this.userProfile = firebase.database().ref('users');
    }

  loginUser(email:string, password:string): any{
    return this.fireAuth.signInWithEmailAndPassword(email,password);

  }

  signupUserService(account: {}){
    return this.fireAuth.createUserWithEmailAndPassword(account['email'], account['password']).then((newUser) => {
              //sign in the user
      this.fireAuth.signInWithEmailAndPassword(account['email'], account['password']).then((authenticatedUser) => {
                  //successful login, create user profile
              this.userProfile.child(authenticatedUser.uid).set(account);
              });
    });
    
  }

  resetPassword(email: string): Promise<void> {
    return this.af.auth.sendPasswordResetEmail(email);
  }
 

  logout(){
    this.af.auth.signOut();      
  }

  get currentUser():string{
    return this.af.auth.currentUser?this.af.auth.currentUser.email:null;
  } 

}