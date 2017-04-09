import { Component, OnInit, ElementRef, Input } from '@angular/core';
import {User} from '../../../shared/models/user';
import { DashboardUsers } from '../../../shared/data/dashboard-menu-data';
import { GlobalSettings } from '../../../shared/data/global-settings';
import { GlobalEventsManager } from '../../../shared/events/global-events.manager';

@Component({
    moduleId: module.id,
    selector: 'sd-dashboard-admin-consumers',
    templateUrl: 'dash-admin-consumers.component.html',
    styleUrls: ['dash-admin-consumers.component.css'],
})


export class DashAdminConsumersComponent implements OnInit {

    selected:any = null;
    users:any[] = [];
    usersRaw:any[] = [];
    selectedPanel:string = GlobalSettings.ROUTE_DASHBOARD_ADMIN_CONSUMERS;

    constructor(private globalEventsManager:GlobalEventsManager) { }

    ngOnInit() {
        this.usersRaw = Object.assign([], DashboardUsers);
        this.users = Object.assign([], DashboardUsers);
        this.globalEventsManager.selectedMenuItem(GlobalSettings.ROUTE_DASHBOARD);
    }

    select(elm:any) {
        this.selected = elm;
    }

    back() {
        this.selected = null;
    }

}
