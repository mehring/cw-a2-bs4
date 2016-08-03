import {Component, ViewEncapsulation, ViewContainerRef} from '@angular/core';
import { ROUTER_DIRECTIVES, Routes } from '@angular/router';

import {TabsComponent} from '../tabs/tabs';

@Component({
	moduleId: module.id,
    selector: 'sd-app',
    templateUrl: 'base.html',
    encapsulation: ViewEncapsulation.None,
    directives: [ROUTER_DIRECTIVES]
})

@Routes([
    { path: '', component: TabsComponent }
])

export class AppComponent {
	viewContainerRef: any = null;
	public constructor(viewContainerRef:ViewContainerRef) {
	    // You need this small hack in order to catch application root view container ref
	    this.viewContainerRef = viewContainerRef;
	}
}
