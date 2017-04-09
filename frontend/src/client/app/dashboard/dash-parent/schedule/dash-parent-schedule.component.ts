import { Component, OnInit } from '@angular/core';
import { GlobalEventsManager } from '../../../shared/index';
import { User } from '../../../shared/models/user';
import { UserService } from '../../../shared/services/user.service';
import { GlobalSettings } from '../../../shared/data/global-settings';

@Component({
    moduleId: module.id,
    selector: 'sd-dashboard-parent-schedule',
    templateUrl: 'dash-parent-schedule.component.html',
    styleUrls: ['dash-parent-schedule.component.css'],
})


export class DashParentScheduleComponent implements OnInit {

    currentUser:User = new User();
    selectedPanel:string = GlobalSettings.ROUTE_DASHBOARD_PARENT_SCHEDULE;

    constructor(private globalEventsManager:GlobalEventsManager, private userService:UserService) { }

    ngOnInit() {
        this.currentUser = this.userService.getCurrentUser();
        this.globalEventsManager.selectedMenuItem(GlobalSettings.ROUTE_DASHBOARD);
    }

}
