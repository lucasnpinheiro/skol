import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {RedesSociaisPage} from './redes-sociais';
import {ComponentsModule} from '../../components/components.module';

@NgModule({
    declarations: [
        RedesSociaisPage,
    ],
    imports: [
        ComponentsModule,
        IonicPageModule.forChild(RedesSociaisPage),
    ],
})
export class RedesSociaisPageModule {}
