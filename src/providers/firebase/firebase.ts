import {AngularFireDatabase} from 'angularfire2/database';
import {Injectable} from '@angular/core';

/*
  Generated class for the FirebaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirebaseProvider {

    constructor(public afd: AngularFireDatabase) {}

    get() {
        return this.afd.list('/chat/');
    }

    add(data) {
        this.afd.list('/chat/').push(data);
    }

    remove(id) {
        this.afd.list('/chat/').remove(id);
    }

}