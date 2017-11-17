import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {FormBuilder, Validators} from '@angular/forms';
import {InfoProvider} from '../../providers/info/info';
import {DatabaseProvider} from '../../providers/database/database';
import {ValidacaoProvider} from '../../providers/validacao/validacao';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-login',
    templateUrl: 'login.html',
})
export class LoginPage {

    public form: any = {};

    constructor(
        public formBuilder: FormBuilder,
        public navCtrl: NavController,
        public validacaoProvider: ValidacaoProvider,
        public infoProvider: InfoProvider,
        public databaseProvider: DatabaseProvider,
        public navParams: NavParams
    ) {
        this.form = this.formBuilder.group(this.getForm());
        this.databaseProvider.get(this.databaseProvider.enum('usuario')).then(r => {
            if (!this.validacaoProvider.isEmpty(r)) {
                this.navCtrl.setRoot('HomePage');
            }
        }).catch();
    }

    getForm() {
        return {
            "email": ['', Validators.required],
            "senha": ['', Validators.required]
        }
    }

    entrar() {
        this.databaseProvider.set(this.databaseProvider.enum('usuario'), this.form.value).then(r => {
            this.navCtrl.setRoot('HomePage');
        }).catch(r => {
            this.infoProvider.alert({
                'title': 'Login',
                'message': 'Não foi possivel realizar o login.',
            });
        });
    }

    recuperar() {
        let config = {
            'title': 'Recuperar senha',
            'message': 'Informa seu email para recuperar a sua senha',
            inputs: [
                {
                    'name': 'email',
                    'type': 'email',
                    'placeholder': 'E-mail'
                }
            ]
        }
        let p = this.infoProvider.prompt(config);
        p.then(r => {
            this.infoProvider.alert({
                'title': 'Recuperar senha',
                'message': 'Aguarde em instante você irá receber um e-mail com a nova senha.',
            });
        }).catch(r => {

        })
    }

}
