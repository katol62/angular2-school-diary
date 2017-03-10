import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Router} from '@angular/router';
import { GlobalEventsManager, User } from '../../shared/index';

@Component({
    moduleId: module.id,
    selector: 'sd-dashboard-menu',
    templateUrl: 'dashboard.menu.component.html',
    styleUrls: ['dashboard.menu.component.css'],
})


export class DashboardMenuComponent implements OnInit {

    @Input() user:User;
    @Input() panels:any[];
    @Input() currentPanel:string;
    @Output() onSelected = new EventEmitter<string>();

    ngOnInit() {
        console.log('init');
    }

    selectPanel(panel:string) {
        this.onSelected.emit(panel);
    }

}
