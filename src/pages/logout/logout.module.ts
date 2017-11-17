import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {LogoutPage} from './logout';
import {ComponentsModule} from '../../components/components.module';

@NgModule({
    declarations: [
        LogoutPage,
    ],
    imports: [
        ComponentsModule,
        IonicPageModule.forChild(LogoutPage),
    ],
})
export class LogoutPageModule {}
