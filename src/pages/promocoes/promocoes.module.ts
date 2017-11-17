import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {PromocoesPage} from './promocoes';
import {ComponentsModule} from '../../components/components.module';

@NgModule({
    declarations: [
        PromocoesPage,
    ],
    imports: [
        ComponentsModule,
        IonicPageModule.forChild(PromocoesPage),
    ],
})
export class PromocoesPageModule {}
