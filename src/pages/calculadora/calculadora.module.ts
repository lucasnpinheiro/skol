import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {CalculadoraPage} from './calculadora';
import {ComponentsModule} from '../../components/components.module';

@NgModule({
    declarations: [
        CalculadoraPage,
    ],
    imports: [
        ComponentsModule,
        IonicPageModule.forChild(CalculadoraPage),
    ],
})
export class CalculadoraPageModule {}
