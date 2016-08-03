import {Component} from '@angular/core';
import {TAB_DIRECTIVES} from 'ng2-bootstrap/ng2-bootstrap';

import {TopNavComponent} from '../../shared/topnav/topnav';

import {ButtonsTabComponent} from './content/buttons';
import {FormTabComponent} from './content/form';
import {GridTabComponent} from './content/grid';
import {ImageTabComponent} from './content/image';
import {LoaderTabComponent} from './content/loader';
import {ModalTabComponent} from './content/modal';
import {TableTabComponent} from './content/table';


@Component({
	moduleId: module.id,
	selector: 'tabs-cmp',
	templateUrl: 'tabs.html',
	styleUrls: ['tabs.css'],
	directives: [
		TAB_DIRECTIVES,
		TopNavComponent,
		ButtonsTabComponent,
		FormTabComponent,
		GridTabComponent,
		ImageTabComponent,
		LoaderTabComponent,
		ModalTabComponent,
		TableTabComponent
	]
})

export class TabsComponent {

	public activeTab:string = 'buttons';

}
