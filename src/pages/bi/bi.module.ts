import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {BiPage} from './bi';
import {ComponentsModule} from '../../components/components.module';

@NgModule({
    declarations: [
        BiPage,
    ],
    imports: [
        ComponentsModule,
        IonicPageModule.forChild(BiPage),
    ],
})
export class BiPageModule {}
