import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {PerfilPage} from './perfil';
import {ComponentsModule} from '../../components/components.module';

@NgModule({
    declarations: [
        PerfilPage,
    ],
    imports: [
        ComponentsModule,
        IonicPageModule.forChild(PerfilPage),
    ],
})
export class PerfilPageModule {}
