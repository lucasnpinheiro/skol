import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {GaleriaPremiosPage} from './galeria-premios';
import {ComponentsModule} from '../../components/components.module';

@NgModule({
    declarations: [
        GaleriaPremiosPage,
    ],
    imports: [
        ComponentsModule,
        IonicPageModule.forChild(GaleriaPremiosPage),
    ],
})
export class GaleriaPremiosPageModule {}
