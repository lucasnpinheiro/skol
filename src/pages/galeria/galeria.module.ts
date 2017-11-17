import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {GaleriaPage} from './galeria';
import {ComponentsModule} from '../../components/components.module';

@NgModule({
    declarations: [
        GaleriaPage,
    ],
    imports: [
        ComponentsModule,
        IonicPageModule.forChild(GaleriaPage),
    ],
})
export class GaleriaPageModule {}
