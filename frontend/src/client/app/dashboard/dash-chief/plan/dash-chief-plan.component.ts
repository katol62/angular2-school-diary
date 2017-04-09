import { Component, OnInit } from '@angular/core';
import { GlobalEventsManager } from '../../../shared/index';
import { User } from '../../../shared/models/user';
import { UserService } from '../../../shared/services/user.service';
import { GlobalSettings } from '../../../shared/data/global-settings';

@Component({
    moduleId: module.id,
    selector: 'sd-dashboard-chief-plan',
    templateUrl: 'dash-chief-plan.component.html',
    styleUrls: ['dash-chief-plan.component.css'],
})


export class DashChiefPlanComponent implements OnInit {

    currentUser:User = new User();
    selectedPanel:string = GlobalSettings.ROUTE_DASHBOARD_CHIEF_PLAN;

    constructor(private globalEventsManager:GlobalEventsManager, private userService:UserService) { }

    ngOnInit() {
        this.currentUser = this.userService.getCurrentUser();
        this.globalEventsManager.selectedMenuItem(GlobalSettings.ROUTE_DASHBOARD);
    }

}
