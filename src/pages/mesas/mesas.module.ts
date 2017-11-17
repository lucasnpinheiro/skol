import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {MesasPage} from './mesas';
import {ComponentsModule} from '../../components/components.module';

@NgModule({
    declarations: [
        MesasPage,
    ],
    imports: [
        ComponentsModule,
        IonicPageModule.forChild(MesasPage),
    ],
})
export class MesasPageModule {}
