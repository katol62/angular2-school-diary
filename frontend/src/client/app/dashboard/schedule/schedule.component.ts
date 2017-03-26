import { Component, OnInit, ElementRef, Input } from '@angular/core';
import {Router} from '@angular/router';
import { GlobalEventsManager, AuthService } from '../../shared/index';
import { User } from '../../shared/models/user';

@Component({
    moduleId: module.id,
    selector: 'sd-dashboard-schedule',
    templateUrl: 'schedule.component.html',
    styleUrls: ['schedule.component.css'],
})


export class ScheduleComponent implements OnInit {

    @Input() user:User;

    constructor(private globalEventManager:GlobalEventsManager) { }

    ngOnInit() {
        console.log('init');
    }

}
