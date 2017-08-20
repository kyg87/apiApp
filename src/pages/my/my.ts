import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MyPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-my',
  templateUrl: 'my.html',
})

export class MyPage {


  myPets = {

    Yaoo : {
      kind: 'Cat',
      color: 'white'
    },
    Happy : 
    {
      kind: 'Dog',
      color: 'brown'
    }
  };

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  get pets(){
    return Object.keys(this.myPets);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MyPage');
  }

  onBack(){
    this.navCtrl.pop();
  }

}
