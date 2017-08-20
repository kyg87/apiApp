import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PeopleServiceProvider } from '../../providers/people-service/people-service';
import 'rxjs/add/operator/map';
import { MyPage } from '../my/my';
import { YourPage} from '../your/your';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers : [PeopleServiceProvider]
})

// export class HomePage {
  
//    public people: any;
  
//    constructor(public navCtrl: NavController, public http: Http) {
  
//     this.people = null;
    
//     this.http.get('https://randomuser.me/api/?results=10').map(res => res.json()).subscribe(data => {
//        this.people = data.results;
//        console.log(this.people);
//    });
  
//    }
//  }
export class HomePage {
  public people: any;
  constructor(public navCtrl: NavController, public peopleServiceProvider: PeopleServiceProvider) {
    this.loadPeople();
  }

  loadPeople() {
    this.peopleServiceProvider.load()
      .then(data1 => { 
        this.people = data1;
      });
  }
  onClick(){
    this.navCtrl.push( MyPage );
  }

  onClickYourPage(){
    this.navCtrl.push( YourPage );
  }
}