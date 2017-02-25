import { Component, OnInit, ElementRef } from '@angular/core';
import { GlobalEventsManager } from '../shared/index';
import {Router} from "@angular/router";

/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
    moduleId: module.id,
    selector: 'sd-dashboard',
    templateUrl: 'dashboard.component.html',
    styleUrls: ['dashboard.component.css'],
})

export class DashboardComponent implements OnInit {

    title:string = 'Личный кабинет';

    constructor(public router:Router, public globalEventsManager:GlobalEventsManager) {}

    ngOnInit() {
        console.log('init')
    }

    goHome() {
        this.router.navigateByUrl('/');
    }
}