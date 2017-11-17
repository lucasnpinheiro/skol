import {AlertController} from 'ionic-angular';
import {Injectable} from '@angular/core';
import * as _ from 'lodash';

/*
  Generated class for the InfoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class InfoProvider {

    constructor(
        private alertCtrl: AlertController
    ) {
    }

    alert(config = {}) {
        return new Promise((resolve, reject) => {
            let _config = {
                title: '',
                message: '',
                buttons: [{
                    text: 'Ok',
                    role: 'ok',
                    handler: () => {
                        resolve();
                    }
                }]
            };
            _config = _.merge({}, _config, config)
            let alert = this.alertCtrl.create(_config);
            alert.present();
        });
    }

    confirm(config = {}) {
        return new Promise((resolve, reject) => {
            let _config = {
                title: '',
                message: '',
                buttons: [
                    {
                        text: 'Não',
                        role: 'cancel',
                        handler: () => {
                            reject();
                        }
                    },
                    {
                        text: 'Sim',
                        role: 'ok',
                        handler: () => {
                            resolve();
                        }
                    }
                ]
            };
            _config = _.merge({}, _config, config)
            let alert = this.alertCtrl.create(_config);
            alert.present();
        });
    }

    prompt(config = {}) {
        return new Promise((resolve, reject) => {
            let _config = {
                title: '',
                inputs: [],
                message: '',
                buttons: [
                    {
                        text: 'Cancelar',
                        role: 'cancel',
                        handler: () => {
                            reject(alert.data.inputs);
                        }
                    },
                    {
                        text: 'Ok',
                        role: 'ok',
                        handler: () => {
                            resolve(alert.data.inputs);
                        }
                    }
                ]
            };
            _config = _.merge({}, _config, config)
            let alert = this.alertCtrl.create(_config);
            alert.present();
        });
    }
}
