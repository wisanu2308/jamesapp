import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

import { User } from '../../models/user';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

	user = {} as User;

	constructor(private asAuth: AngularFireAuth,
		public navCtrl: NavController, public navParams: NavParams) {
	}

	async login(user: User){
		try{
			const result = this.asAuth.auth.signInWithEmailAndPassword(user.email, user.password);
			if (result) {
				console.log(result);
				// this.navCtrl.setRoot('HomePage');
			}
		}	
		catch(e){
			console.error(e);
		}

	}

	register(){
		this.navCtrl.push('RegisterPage');
	}
}
