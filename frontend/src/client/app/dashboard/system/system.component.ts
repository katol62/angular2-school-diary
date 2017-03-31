import { Component, OnInit, ElementRef, Input } from '@angular/core';
import {Router} from '@angular/router';
import { GlobalEventsManager, AuthService } from '../../shared/index';
import { User } from '../../shared/models/user';

@Component({
    moduleId: module.id,
    selector: 'sd-dashboard-system',
    templateUrl: 'system.component.html',
    styleUrls: ['system.component.css'],
})


export class SystemComponent implements OnInit {

    @Input() user:User;

    //webvideo:any = {idx: '1', src: 'http://staging.schoolarlife.ru:8090/cam.webm', type: 'video/webm'};
    //webvideo:any = {idx: '1', src: 'blob:http://staging.schoolarlife.ru/04b691af-4014-4b77-bb8b-eb1009948d1a', type: 'application/x-mpegURL'};

    constructor(private globalEventManager:GlobalEventsManager) { }

    ngOnInit() {
        console.log('init');
    }

}
