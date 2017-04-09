import { Component, OnInit } from '@angular/core';
import { GlobalEventsManager } from '../../../shared/index';
import {User} from "../../../shared/models/user";
import {UserService} from "../../../shared/services/user.service";
import {GlobalSettings} from "../../../shared/data/global-settings";

@Component({
    moduleId: module.id,
    selector: 'sd-dashboard-chief-meals',
    templateUrl: 'dash-chief-meals.component.html',
    styleUrls: ['dash-chief-meals.component.css'],
})


export class DashChiefMealsComponent implements OnInit {

    currentUser:User = new User();
    selectedPanel:string = GlobalSettings.ROUTE_DASHBOARD_CHIEF_MEALS;

    constructor(private globalEventsManager:GlobalEventsManager, private userService:UserService) { }

    ngOnInit() {
        this.currentUser = this.userService.getCurrentUser();
        this.globalEventsManager.selectedMenuItem(GlobalSettings.ROUTE_DASHBOARD);
    }

}
