import {Component, Input} from '@angular/core';

/**
 * Generated class for the TopoComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
    selector: 'topo',
    templateUrl: 'topo.html'
})
export class TopoComponent {

    @Input('title') title;

    myTitle = '';

    constructor() {
    }

    ngOnInit() {
        this.myTitle = this.title || '';
    }

}
