import {Component, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams, Content} from 'ionic-angular';
import {FirebaseProvider} from './../../providers/firebase/firebase';
import {DatabaseProvider} from '../../providers/database/database';
import {ValidacaoProvider} from '../../providers/validacao/validacao';
import * as _ from 'lodash';

/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-chat',
    templateUrl: 'chat.html',
})
export class ChatPage {

    @ViewChild(Content) content: Content;

    chat: any[];
    dados: object = {
        sala: '',
        data_hora: ''
    };
    message = '';
    user: object = {};
    data: object = {
        message: '',
        usuario_id: '',
        nome: '',
        data_hora: '',
        image: '',
        sala: '',
    };

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public validacaoProvider: ValidacaoProvider,
        public databaseProvider: DatabaseProvider,
        public firebaseProvider: FirebaseProvider
    ) {

        let data_hora = new Date();
        let _data_hora = data_hora.getFullYear() + '' + (data_hora.getMonth() + 1) + '' + data_hora.getDate();
        this.dados = {
            sala: 'i1',
            data_hora: _data_hora
        }
        this.databaseProvider.get(this.databaseProvider.enum('usuario')).then(r => {
            if (!this.validacaoProvider.isEmpty(r)) {
                this.user = r;
            }
        }).catch();
        this.firebaseProvider.get().valueChanges(['child_added', 'child_changed']).subscribe(post => {
            this.chat = _.filter(post, {data_hora: this.dados['data_hora'], sala: this.dados['sala']});
            setTimeout(() => {
                this.content.scrollToBottom();
            }, 150)
        })
    }

    addItem() {
        let aleatorio = (Math.random() * 2) + 1;
        aleatorio = Math.round(aleatorio);
        this.data = {
            message: this.message,
            usuario_id: aleatorio,
            email: this.user['email'],
            nome: this.user['email'],
            data_hora: this.dados['data_hora'],
            image: '',
            sala: this.dados['sala'],
        }
        this.firebaseProvider.add(this.data);
        this.message = '';
    }

    removeItem(id) {
        this.firebaseProvider.remove(id);
    }

    tipoUser(i) {
        return i.usuario_id == 1 ? 'chat-user' : 'chat-amigo';
    }

}
