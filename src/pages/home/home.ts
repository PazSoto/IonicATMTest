import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

import { NipPage } from '../nip/nip';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  nipPage = NipPage;

  bankAccount:String;

  persons = [
    {id: 123456781234, firstName:'Hans', lastName:'Zimer', amount:8000.80, nip: 1234},
    {id: 123456781235, firstName:'Christopher', lastName:'Nolan', amount: 0.89, nip: 4567},
    {id: 123456781236, firstName:'Josh', lastName:'Widdon', amount: 25000.49, nip: 4568}
  ];

  selectedUser = [];

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
    
  }

  public goToNipPage(){
    if(this.validateAccount(this.bankAccount)){
      this.navCtrl.push(this.nipPage,{
        user: this.selectedUser
      });
    } else {
      this.showErrorAlert();
    }
  }

  public validateAccount(number:String) : boolean{
    console.log(number);
    var isValid = false;

    for ( var i = 0, length = this.persons.length; i < length; i++ ){
      if(this.persons[i].id == Number(this.bankAccount)){
        isValid = true;
        this.selectedUser.push(this.persons[i]);
      }
    }

    return isValid;
    
  }
  
  showErrorAlert() {
    const alert = this.alertCtrl.create({
      title: 'Wrong Account!',
      subTitle: 'Your account number doesn\'t exist, please try again.',
      buttons: ['OK']
    });
    alert.present();
  }
}
