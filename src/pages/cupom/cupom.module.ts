import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {CupomPage} from './cupom';
import {ComponentsModule} from '../../components/components.module';

@NgModule({
    declarations: [
        CupomPage,
    ],
    imports: [
        ComponentsModule,
        IonicPageModule.forChild(CupomPage),
    ],
})
export class CupomPageModule {}
