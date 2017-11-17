import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {MesasAdicionarPage} from './mesas-adicionar';
import {ComponentsModule} from '../../components/components.module';

@NgModule({
    declarations: [
        MesasAdicionarPage,
    ],
    imports: [
        ComponentsModule,
        IonicPageModule.forChild(MesasAdicionarPage),
    ],
})
export class MesasAdicionarPageModule {}
