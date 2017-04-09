import { Component, OnInit } from '@angular/core';
import { GlobalEventsManager } from '../../../shared/index';
import { User } from '../../../shared/models/user';
import { UserService } from '../../../shared/services/user.service';
import { GlobalSettings } from '../../../shared/data/global-settings';

@Component({
    moduleId: module.id,
    selector: 'sd-dashboard-parent-events',
    templateUrl: 'dash-parent-events.component.html',
    styleUrls: ['dash-parent-events.component.css'],
})


export class DashParentEventsComponent implements OnInit {

    currentUser:User = new User();
    selectedPanel:string = GlobalSettings.ROUTE_DASHBOARD_PARENT_EVENTS;

    constructor(private globalEventsManager:GlobalEventsManager, private userService:UserService) { }

    ngOnInit() {
        this.currentUser = this.userService.getCurrentUser();
        this.globalEventsManager.selectedMenuItem(GlobalSettings.ROUTE_DASHBOARD);
    }

}
