import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {QuizzPage} from './quizz';
import {ComponentsModule} from '../../components/components.module';

@NgModule({
    declarations: [
        QuizzPage,
    ],
    imports: [
        ComponentsModule,
        IonicPageModule.forChild(QuizzPage),
    ],
})
export class QuizzPageModule {}
