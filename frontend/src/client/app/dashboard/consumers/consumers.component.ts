import { Component, OnInit, ElementRef, Input } from '@angular/core';
import {Router} from '@angular/router';
import { GlobalEventsManager, AuthService } from '../../shared/index';
import {User} from "../../shared/models/user";
import {DashboardUsers} from "../../shared/data/dashboard-menu-data";

@Component({
    moduleId: module.id,
    selector: 'sd-dashboard-consumers',
    templateUrl: 'consumers.component.html',
    styleUrls: ['consumers.component.css'],
})


export class ConsumersComponent implements OnInit {

    selected:any = null;
    users:any[] = [];
    usersRaw:any[] = [];

    @Input() user:User;

    constructor(private globalEventManager:GlobalEventsManager) { }

    ngOnInit() {
        this.usersRaw = Object.assign([], DashboardUsers);
        this.users = Object.assign([], DashboardUsers);
    }

    select(elm:any) {
        this.selected = elm;
    }

    back() {
        this.selected = null;
    }

}
