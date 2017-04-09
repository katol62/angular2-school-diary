import { Component, OnInit, ElementRef, Input } from '@angular/core';
import {Router} from '@angular/router';
import { User } from '../../../shared/models/user';
import {GlobalSettings} from "../../../shared/data/global-settings";
import {GlobalEventsManager} from "../../../shared/events/global-events.manager";

@Component({
    moduleId: module.id,
    selector: 'sd-dashboard-admin-system',
    templateUrl: 'dash-admin-system.component.html',
    styleUrls: ['dash-admin-system.component.css'],
})


export class DashAdminSystemComponent implements OnInit {

    @Input() user:User;

    //webvideo:any = {idx: '1', src: 'http://staging.schoolarlife.ru:8090/cam.webm', type: 'video/webm'};
    //webvideo:any = {idx: '1', src: 'blob:http://staging.schoolarlife.ru/04b691af-4014-4b77-bb8b-eb1009948d1a', type: 'application/x-mpegURL'};
    selectedPanel:string = GlobalSettings.ROUTE_DASHBOARD_ADMIN_SYSTEM;

    constructor(private globalEventsManager:GlobalEventsManager) { }

    ngOnInit() {
        console.log('init');
        this.globalEventsManager.selectedMenuItem(GlobalSettings.ROUTE_DASHBOARD);
    }

}
