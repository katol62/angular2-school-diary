import { Component, OnInit } from '@angular/core';
import { GlobalEventsManager } from '../../../shared/index';
import {User} from "../../../shared/models/user";
import {UserService} from "../../../shared/services/user.service";
import {GlobalSettings} from "../../../shared/data/global-settings";

@Component({
    moduleId: module.id,
    selector: 'sd-dashboard-chief-parents',
    templateUrl: 'dash-chief-parents.component.html',
    styleUrls: ['dash-chief-parents.component.css'],
})


export class DashChiefParentsComponent implements OnInit {

    currentUser:User = new User();
    selectedPanel:string = GlobalSettings.ROUTE_DASHBOARD_CHIEF_PARENTS;

    constructor(private globalEventsManager:GlobalEventsManager, private userService:UserService) { }

    ngOnInit() {
        this.currentUser = this.userService.getCurrentUser();
        this.globalEventsManager.selectedMenuItem(GlobalSettings.ROUTE_DASHBOARD);
    }

}
