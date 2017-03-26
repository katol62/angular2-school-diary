import { Component, OnInit, ElementRef, Input } from '@angular/core';
import {Router} from '@angular/router';
import { GlobalEventsManager } from '../../shared/index';
import { User } from '../../shared/models/user';

@Component({
    moduleId: module.id,
    selector: 'sd-dashboard-plan',
    templateUrl: 'plan.component.html',
    styleUrls: ['plan.component.css'],
})


export class PlanComponent implements OnInit {

    @Input() user:User;

    constructor(private globalEventManager:GlobalEventsManager) { }

    ngOnInit() {
        console.log('init');
    }

}
