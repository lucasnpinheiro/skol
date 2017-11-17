import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {SorteioPage} from './sorteio';
import {ComponentsModule} from '../../components/components.module';

@NgModule({
    declarations: [
        SorteioPage,
    ],
    imports: [
        ComponentsModule,
        IonicPageModule.forChild(SorteioPage),
    ],
})
export class SorteioPageModule {}
