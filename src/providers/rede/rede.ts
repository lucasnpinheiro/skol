import {Injectable} from '@angular/core';
import {Network} from '@ionic-native/network';
import {Observable} from 'rxjs/Observable';

declare var WifiWizard: any;

/*
  Generated class for the RedeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RedeProvider {

    isOnline: any;
    isOnlineObserver: any;

    constructor(private network: Network) {
        if (typeof WifiWizard !== 'undefined') {
            console.log(WifiWizard);
        } else {
            console.warn('WifiWizard not loaded');
        }

        this.isOnline = false;

        this.isOnline = Observable.create(observer => {
            this.isOnlineObserver = observer;
        });

        let disconnectSubscription = this.network.onDisconnect().subscribe(() => {
            this.isOnline = false;
            this.isOnlineObserver.next(this.isOnline);
        });

        // stop disconnect watch
        disconnectSubscription.unsubscribe();


        // watch network for a connection
        this.network.onConnect().subscribe(() => {
            console.log(this.network);
            if (this.network.type === 'wifi') {
                this.isOnline = true;
            } else {
                this.isOnline = false;
            }
            this.isOnlineObserver.next(this.isOnline);
        });
    }

    wifi() {
        return new Promise((resolve, reject) => {
            if (typeof WifiWizard !== 'undefined') {
                WifiWizard.getCurrentSSID((r) => {
                    resolve(r);
                }, (f) => {
                    reject(f);
                });
            } else {
                reject('WifiWizard not found.')
            }
        });
    }

    getStatus(): Observable<any> {
        return this.isOnline;
    }

}
