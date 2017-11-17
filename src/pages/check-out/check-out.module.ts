import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {CheckOutPage} from './check-out';
import {ComponentsModule} from '../../components/components.module';

@NgModule({
    declarations: [
        CheckOutPage,
    ],
    imports: [
        ComponentsModule,
        IonicPageModule.forChild(CheckOutPage),
    ],
})
export class CheckOutPageModule {}
