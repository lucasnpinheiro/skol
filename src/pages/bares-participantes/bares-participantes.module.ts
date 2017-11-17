import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {BaresParticipantesPage} from './bares-participantes';
import {ComponentsModule} from '../../components/components.module';

@NgModule({
    declarations: [
        BaresParticipantesPage,
    ],
    imports: [
        ComponentsModule,
        IonicPageModule.forChild(BaresParticipantesPage),
    ],
})
export class BaresParticipantesPageModule {}
