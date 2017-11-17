import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {VideoTreinamentoPage} from './video-treinamento';
import {ComponentsModule} from '../../components/components.module';

@NgModule({
    declarations: [
        VideoTreinamentoPage,
    ],
    imports: [
        ComponentsModule,
        IonicPageModule.forChild(VideoTreinamentoPage),
    ],
})
export class VideoTreinamentoPageModule {}
