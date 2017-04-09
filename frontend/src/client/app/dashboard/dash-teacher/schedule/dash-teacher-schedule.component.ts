import { Component, OnInit } from '@angular/core';
import { GlobalEventsManager } from '../../../shared/index';
import {User} from "../../../shared/models/user";
import {UserService} from "../../../shared/services/user.service";
import {GlobalSettings} from "../../../shared/data/global-settings";

@Component({
    moduleId: module.id,
    selector: 'sd-dashboard-teacher-schedule',
    templateUrl: 'dash-teacher-schedule.component.html',
    styleUrls: ['dash-teacher-schedule.component.css'],
})


export class DashTeacherScheduleComponent implements OnInit {

    currentUser:User = new User();
    selectedPanel:string = GlobalSettings.ROUTE_DASHBOARD_TEACHER_SCHEDULE;

    constructor(private globalEventsManager:GlobalEventsManager, private userService:UserService) { }

    ngOnInit() {
        this.currentUser = this.userService.getCurrentUser();
        this.globalEventsManager.selectedMenuItem(GlobalSettings.ROUTE_DASHBOARD);
    }

}
