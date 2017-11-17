import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {RedeProvider} from '../../providers/rede/rede';

/**
 * Generated class for the CheckInPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-check-in',
    templateUrl: 'check-in.html',
})
export class CheckInPage {

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public redeProvider: RedeProvider
    ) {
        this.redeProvider.wifi().then(r => {
            console.log('redeProvider: ', r);
        }).catch(f => {
            console.log('redeProvider: ', f);
        });

        this.redeProvider.getStatus().subscribe(r => {
            console.log('this.redeProvider.getStatus');
            console.log(r);
        })
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad CheckInPage');
    }

}
