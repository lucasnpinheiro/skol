import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {QuantidadeCervejaPage} from './quantidade-cerveja';
import {ComponentsModule} from '../../components/components.module';

@NgModule({
    declarations: [
        QuantidadeCervejaPage,
    ],
    imports: [
        ComponentsModule,
        IonicPageModule.forChild(QuantidadeCervejaPage),
    ],
})
export class QuantidadeCervejaPageModule {}
