import { Component, OnInit, ElementRef, Input } from '@angular/core';
import {Router} from '@angular/router';
import { GlobalEventsManager, AuthService } from '../../shared/index';
import { User } from '../../shared/models/user';
import {DashboardSchools} from "../../shared/data/dashboard-menu-data";

@Component({
    moduleId: module.id,
    selector: 'sd-dashboard-schools',
    templateUrl: 'schools.component.html',
    styleUrls: ['schools.component.css'],
})


export class SchoolsComponent implements OnInit {

    schoolsRaw:any[] = [];
    schools:any[] = [];
    page:number = 0;
    totalPages:number = 0;
    pageList:number[] = [];
    perPage:number = 15;
    selected:any = null;

    @Input() user:User;

    constructor(private globalEventManager:GlobalEventsManager) { }

    ngOnInit() {
        this.schoolsRaw = Object.assign([], DashboardSchools);
        this.schools = this.getSchoolsForPage(this.page, this.schoolsRaw);

        this.totalPages = Math.floor(this.schoolsRaw.length/this.perPage);
        for (let i=0; i<=this.totalPages; i++) {
            this.pageList.push(i);
        }
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
