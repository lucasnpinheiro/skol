import {Storage} from '@ionic/storage';
import {Injectable} from '@angular/core';
import * as _ from 'lodash';

/*
  Generated class for the DatabaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DatabaseProvider {

    constructor(public storage: Storage) {

    }

    set(key, value) {
        return new Promise((resolve, reject) => {
            if (_.isObject(value)) {
                value = JSON.stringify(value);
            }
            this.storage.set(key, value);
            resolve();
        });
    }

    get(key) {
        return new Promise((resolve, reject) => {
            this.storage.get(key).then(r => {
                if (this.isJson(r)) {
                    resolve(JSON.parse(r));
                } else {
                    resolve(r);
                }
            }).catch(r => {
                reject(r);
            });
        });
    }

    clear() {
        return new Promise((resolve, reject) => {
            this.storage.clear().then(() => {
                resolve();
            }).catch(() => {
                resolve();
            });
        });
    }

    isJson(item) {
        item = typeof item !== "string"
            ? JSON.stringify(item)
            : item;

        try {
            item = JSON.parse(item);
        } catch (e) {
            return false;
        }

        if (typeof item === "object" && item !== null) {
            return true;
        }

        return false;
    }

    enum(key) {
        let list = {
            'usuario': 'Usuario'
        }
        if (!!list[key]) {
            return list[key]
        } else {
            return null;
        }
    }
}
