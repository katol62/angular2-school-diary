import { Component, OnInit, ElementRef, Input } from '@angular/core';
import {Router} from '@angular/router';
import { User } from '../../../shared/models/user';
import { DashboardSchools } from '../../../shared/data/dashboard-menu-data';
import { GlobalSettings } from '../../../shared/data/global-settings';
import { GlobalEventsManager } from '../../../shared/events/global-events.manager';

@Component({
    moduleId: module.id,
    selector: 'sd-dashboard-admin-schools',
    templateUrl: 'dash-admin-schools.component.html',
    styleUrls: ['dash-admin-schools.component.css'],
})


export class DashAdminSchoolsComponent implements OnInit {

    schoolsRaw:any[] = [];
    schools:any[] = [];
    page:number = 0;
    totalPages:number = 0;
    pageList:number[] = [];
    perPage:number = 15;
    selected:any = null;
    selectedPanel:string = GlobalSettings.ROUTE_DASHBOARD_ADMIN_SCHOOLS;

    @Input() user:User;

    constructor(private globalEventsManager:GlobalEventsManager) { }

    ngOnInit() {
        this.schoolsRaw = Object.assign([], DashboardSchools);
        this.schools = this.getSchoolsForPage(this.page, this.schoolsRaw);

        this.totalPages = Math.floor(this.schoolsRaw.length/this.perPage);
        for (let i=0; i<=this.totalPages; i++) {
            this.pageList.push(i);
        }
        this.globalEventsManager.selectedMenuItem(GlobalSettings.ROUTE_DASHBOARD);
    }

    getSchoolsForPage(page:number, source:any[]) {
        let target:any = [];
        let start = this.page * this.perPage;
        let end = (this.page+1) * this.perPage > DashboardSchools.length ? DashboardSchools.length : (this.page+1) * this.perPage;
        for (let i=start; i<end; i++) {
            target.push(source[i]);
        }
        return target;
    }

    edit(elm:any) {
        this.selected = elm;
    }

    back() {
        this.selected = null;
    }

    navigate(pg:number) {
        this.page = pg;
        this.schools = this.getSchoolsForPage(this.page, this.schoolsRaw);
    }

}
