import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {CampanhasPage} from './campanhas';
import {ComponentsModule} from '../../components/components.module';

@NgModule({
    declarations: [
        CampanhasPage,
    ],
    imports: [
        ComponentsModule,
        IonicPageModule.forChild(CampanhasPage),
    ],
})
export class CampanhasPageModule {}
