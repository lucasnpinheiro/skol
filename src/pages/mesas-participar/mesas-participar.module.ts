import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {MesasParticiparPage} from './mesas-participar';
import {ComponentsModule} from '../../components/components.module';

@NgModule({
    declarations: [
        MesasParticiparPage,
    ],
    imports: [
        ComponentsModule,
        IonicPageModule.forChild(MesasParticiparPage),
    ],
})
export class MesasParticiparPageModule {}
