import { Component, OnInit, ElementRef, Input, NgModule } from '@angular/core';
import {User} from '../../../shared/models/user';
import { DashboardUsers } from '../../../shared/data/dashboard-menu-data';
import { GlobalSettings } from '../../../shared/data/global-settings';
import { GlobalEventsManager } from '../../../shared/events/global-events.manager';
import {UserService} from "../../../shared/services/user.service";

@Component({
    moduleId: module.id,
    selector: 'sd-dashboard-admin-consumers',
    templateUrl: 'dash-admin-consumers.component.html',
    styleUrls: ['dash-admin-consumers.component.css'],
})


export class DashAdminConsumersComponent implements OnInit {

    selected:User = null;
    users:any[] = [];
    selectedPanel:string = GlobalSettings.ROUTE_DASHBOARD_ADMIN_CONSUMERS;

    constructor(private globalEventsManager:GlobalEventsManager, private userService:UserService) { }

    ngOnInit() {
        this.userService.getAll()
            .subscribe(
                data => {
                    this.afterUsersGet(data);
                },
                error => {
                    this.afterUsersGet(null)
                }
            );
        this.globalEventsManager.selectedMenuItem(GlobalSettings.ROUTE_DASHBOARD);
    }

    afterUsersGet(data:any) {
        if (data === null) {
            console.log('users null')
        } else {
            this.users = data;
        }
    }

    select(elm:any) {
        this.selected = elm;
    }

    back() {
        this.selected = null;
    }

    getRole(user:User) {
        return GlobalSettings.ROLES[user.primeRole];
    }

    update() {
        debugger;
        console.log();
    }

}
