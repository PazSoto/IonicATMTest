import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the MainmenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mainmenu',
  templateUrl: 'mainmenu.html',
})
export class MainmenuPage {

  userAccount = [];
  amountToWithdraw: String;
  balance = 0;
  resultOfNotes = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    this.userAccount = this.navParams.get('user');
    console.log(this.userAccount);
    this.balance = this.userAccount[0].amount;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainmenuPage');
  }

  withdrawlMoney(){
    if(Number(this.amountToWithdraw) % 5 != 0){
      alert('Incorrect Withdrawal Amount (not multiple of $5, $10, $20, $50 or $100)');
      return false;
    }else	if(Number(this.amountToWithdraw) >= this.balance){
      alert('Insufficient Funds');
      return false;
    }
    this.balance = this.balance - Number(this.amountToWithdraw);

    var importe:string = this.amountToWithdraw.toString();
    var coins=[100, 50, 20, 10, 5];
    var manyCoins = [3,3,3,3,3];
  
    var change=[0,0,0,0];
    
    for(var i=0; i<coins.length; i++)
    {
        if(parseInt(importe)>=coins[i])
        {
          change[i]=Math.floor( parseInt(importe)/coins[i]);
    
          importe=`${parseInt(importe)-(change[i]*coins[i])}`;
          manyCoins[i] = manyCoins[i] - change[i];
          
        }
    }
    
    for(i=0; i<coins.length; i++)
    {
        if(change[i]>0)
        {
            this.resultOfNotes = this.resultOfNotes + '\n' + "There is: "+change[i]+" note of: $"+coins[i];
            console.log("There is: "+change[i]+" notes of: $"+coins[i]);
        }
    }
    this.showSuccesAlert();

  }

  showSuccesAlert() {
    const alert = this.alertCtrl.create({
      title: 'Successful Transaction',
      subTitle: 'Available Balance is: $'+this.balance+'\n'+this.resultOfNotes,
      buttons: ['Take the money!']
    });
    alert.present();
  }


}
