import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {IonicModule} from 'ionic-angular';
import {TopoComponent} from './topo/topo';
@NgModule({
    declarations: [
        TopoComponent
    ],
    imports: [
        IonicModule
    ],
    exports: [
        TopoComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentsModule {}
