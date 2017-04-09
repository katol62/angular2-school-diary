import { Component, OnInit, Input } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {UserService} from "../../shared/services/user.service";
import {DashboardMenu} from "../../shared/data/dashboard-menu-data";
import {GlobalSettings} from "../../shared/data/global-settings";
import {User} from "../../shared/models/user";
import {GlobalEventsManager} from "../../shared/events/global-events.manager";

@Component({
    moduleId: module.id,
    selector: 'sd-dashboard-menu',
    templateUrl: 'dashboard.menu.component.html',
    styleUrls: ['dashboard.menu.component.css'],
})


export class DashboardMenuComponent implements OnInit {

    currentUser:User = new User();
    panels:any[] = [];

    @Input() selectedPanel:string;

    constructor(public globalEventsManager:GlobalEventsManager, private userService:UserService, private route: ActivatedRoute, public router:Router) {}
    
    
    ngOnInit() {
        console.log('init');
        this.currentUser = this.userService.getCurrentUser();
        this.panels = DashboardMenu['all'];
    }

    selectPanel(panel:string) {
        this.router.navigateByUrl('dashboard/'+panel);
        this.globalEventsManager.selectedMenuItem(GlobalSettings.ROUTE_DASHBOARD);
    }

}
