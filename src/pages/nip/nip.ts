import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { MainmenuPage } from '../mainmenu/mainmenu';

@Component({
  selector: 'page-nip',
  templateUrl: 'nip.html',
})
export class NipPage {

  userAccount = [];

  nipCode: String;

  mainMenuPage = MainmenuPage;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    this.navParams.get('user');
    this.userAccount = this.navParams.get('user');
    console.log(this.userAccount);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NipPage');
  }

  public goToMainMenuPage(){
    if(this.userAccount[0].nip == Number(this.nipCode)){
      this.navCtrl.push(this.mainMenuPage,{
        user: this.userAccount
      });
      console.log("Entró el nip correcto");
    } else {
      this.showErrorAlert();
    }
  }

  showErrorAlert() {
    const alert = this.alertCtrl.create({
      title: 'Wrong NIP code!',
      subTitle: 'Verify your NIP code and try again please.',
      buttons: ['OK']
    });
    alert.present();
  }

}
