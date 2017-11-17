import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {NotificacoesPage} from './notificacoes';
import {ComponentsModule} from '../../components/components.module';

@NgModule({
    declarations: [
        NotificacoesPage,
    ],
    imports: [
        ComponentsModule,
        IonicPageModule.forChild(NotificacoesPage),
    ],
})
export class NotificacoesPageModule {}
