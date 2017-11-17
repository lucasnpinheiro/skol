import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {CheckInPage} from './check-in';
import {ComponentsModule} from '../../components/components.module';

@NgModule({
    declarations: [
        CheckInPage,
    ],
    imports: [
        ComponentsModule,
        IonicPageModule.forChild(CheckInPage),
    ],
})
export class CheckInPageModule {}
