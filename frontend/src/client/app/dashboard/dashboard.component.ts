import { Component, OnInit, ElementRef } from '@angular/core';
import { GlobalEventsManager } from '../shared/index';
import { Router, ActivatedRoute } from '@angular/router';
import {User} from "../shared/models/user";
import {UserService} from "../shared/services/user.service";
import {DashboardMenu} from "../shared/data/dashboard-menu-data";

/**
 * This class represents the lazy loaded DashboardComponent.
 */
@Component({
    moduleId: module.id,
    selector: 'sd-dashboard',
    templateUrl: 'dashboard.component.html',
    styleUrls: ['dashboard.component.css'],
})

export class DashboardComponent implements OnInit {

    panels:any[] = [];

    title:string = 'Панель управления';
    currentPanel:string = '';
    currentTitle:string = '';
    selectedPanel:any = null;

    currentUser:User = new User();

    constructor(private route: ActivatedRoute, public router:Router, public globalEventsManager:GlobalEventsManager, private userService:UserService) {}

    ngOnInit() {
        console.log('init');
        this.currentUser = this.userService.getCurrentUser();

        this.panels = DashboardMenu[this.currentUser.primeRole];

        this.currentPanel = this.panels[0].id;
        this.currentTitle = this.panels[0].title;

        if (this.route.snapshot.data) {
            //this.currentPanel = this.route.snapshot.data['type'];
        }
    }

    goHome() {
        this.router.navigateByUrl('/');
    }

    selectPanel(panelId:string) {
        this.currentPanel = panelId;
        let panel:any = this.getPanelById(panelId);
        this.currentTitle = panel ? panel.title : '';
    }

    getPanelById(id:string):any
    {
        let ret = null;
        this.panels.forEach((panel:any) => {
            if (panel.id === id) {
                ret = panel;
            }
        });
        return ret;
    }

}

