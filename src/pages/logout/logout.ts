import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {DatabaseProvider} from '../../providers/database/database';

/**
 * Generated class for the LogoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-logout',
  templateUrl: 'logout.html',
})
export class LogoutPage {

    public form: any = {};

    constructor(
        public navCtrl: NavController,
        public databaseProvider: DatabaseProvider,
        public navParams: NavParams
    ) {
        this.databaseProvider.clear().then(r => {
            this.navCtrl.setRoot('LoginPage');
        }).catch();
    }

}
