import { Component, OnInit, ElementRef, Input } from '@angular/core';
import { GlobalEventsManager } from '../../../shared/index';
import { User } from '../../../shared/models/user';
import { UserService } from '../../../shared/services/user.service';
import { GlobalSettings } from '../../../shared/data/global-settings';

@Component({
    moduleId: module.id,
    selector: 'sd-dashboard-teacher-profile',
    templateUrl: 'dash-teacher-profile.component.html',
    styleUrls: ['dash-teacher-profile.component.css'],
})


export class DashTeacherProfileComponent implements OnInit {

    currentUser:User = new User();
    selectedPanel:string = 'teacher-profile';

    constructor(private globalEventsManager:GlobalEventsManager, private userService:UserService) { }

    ngOnInit() {
        this.currentUser = this.userService.getCurrentUser();
        this.globalEventsManager.selectedMenuItem(GlobalSettings.ROUTE_DASHBOARD);
    }
    
}
