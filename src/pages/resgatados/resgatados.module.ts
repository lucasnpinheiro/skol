import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {ResgatadosPage} from './resgatados';
import {ComponentsModule} from '../../components/components.module';

@NgModule({
    declarations: [
        ResgatadosPage,
    ],
    imports: [
        ComponentsModule,
        IonicPageModule.forChild(ResgatadosPage),
    ],
})
export class ResgatadosPageModule {}
