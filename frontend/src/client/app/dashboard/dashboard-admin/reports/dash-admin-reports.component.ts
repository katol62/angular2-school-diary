import { Component, OnInit, ElementRef, Input } from '@angular/core';
import {Router} from '@angular/router';
import { User } from '../../../shared/models/user';
import {GlobalSettings} from "../../../shared/data/global-settings";
import {GlobalEventsManager} from "../../../shared/events/global-events.manager";

@Component({
    moduleId: module.id,
    selector: 'sd-dashboard-admin-reports',
    templateUrl: 'dash-admin-reports.component.html',
    styleUrls: ['dash-admin-reports.component.css'],
})


export class DashAdminReportsComponent implements OnInit {

    selectedPanel:string = GlobalSettings.ROUTE_DASHBOARD_ADMIN_REPORTS;

    constructor(private globalEventsManager:GlobalEventsManager) { }

    ngOnInit() {
        console.log('init');
        this.globalEventsManager.selectedMenuItem(GlobalSettings.ROUTE_DASHBOARD);
    }

}
