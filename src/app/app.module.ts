import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';

import {MyApp} from './app.component';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {InfoProvider} from '../providers/info/info';
import {DatabaseProvider} from '../providers/database/database';

import {IonicStorageModule} from '@ionic/storage';
import {ValidacaoProvider} from '../providers/validacao/validacao';

import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireModule} from 'angularfire2';
import {FirebaseProvider} from '../providers/firebase/firebase';
import {RedeProvider} from '../providers/rede/rede';
import {Network} from '@ionic-native/network';

const firebaseConfig = {
    apiKey: "AIzaSyD7ZIoZhM2YvUc9MXWQvinZHLtoCqLKaqg",
    authDomain: "testelucas-89011.firebaseapp.com",
    databaseURL: "https://testelucas-89011.firebaseio.com",
    projectId: "testelucas-89011",
    storageBucket: "testelucas-89011.appspot.com",
    messagingSenderId: "248059471193"
};

@NgModule({
    declarations: [
        MyApp,
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp),
        AngularFireDatabaseModule,
        AngularFireModule.initializeApp(firebaseConfig),
        IonicStorageModule.forRoot({
            name: '__mydb',
            driverOrder: ['indexeddb', 'websql', 'sqlite']
        }),
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        InfoProvider,
        DatabaseProvider,
        ValidacaoProvider,
        FirebaseProvider,
        Network,
        RedeProvider
    ]
})
export class AppModule {}
