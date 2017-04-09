import { Component, OnInit } from '@angular/core';
import { GlobalEventsManager } from '../../../shared/index';
import { User } from '../../../shared/models/user';
import { UserService } from '../../../shared/services/user.service';
import { GlobalSettings } from '../../../shared/data/global-settings';

@Component({
    moduleId: module.id,
    selector: 'sd-dashboard-parent-sheet',
    templateUrl: 'dash-parent-sheet.component.html',
    styleUrls: ['dash-parent-sheet.component.css'],
})


export class DashParentSheetComponent implements OnInit {

    currentUser:User = new User();
    selectedPanel:string = GlobalSettings.ROUTE_DASHBOARD_PARENT_SHEET;

    constructor(private globalEventsManager:GlobalEventsManager, private userService:UserService) { }

    ngOnInit() {
        this.currentUser = this.userService.getCurrentUser();
        this.globalEventsManager.selectedMenuItem(GlobalSettings.ROUTE_DASHBOARD);
    }

}
