import { Component, OnInit, ElementRef } from '@angular/core';
import { GlobalEventsManager } from '../shared/index';
import { Router } from '@angular/router';

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

    panels:[] = [
        {id:'profile', title: 'Профиль', icon: 'fa fa-user fa-lg'},
        {id:'elm1', title: 'Элемент 1', icon: 'fa fa-gift fa-lg', elms: [
            {id: 'sub1', title: 'Sub1'},
            {id: 'sub2', title: 'Sub1'},
        ]},
        {id:'elm2', title: 'Элемент 2', icon: 'fa fa-globe fa-lg'},
        {id:'elm3', title: 'Элемент 3', icon: 'fa fa-car fa-lg'},
    ];

    title:string = 'Панель инструментов';
    currentPanel:string = 'profile';

    constructor(public router:Router, public globalEventsManager:GlobalEventsManager) {}

    ngOnInit() {
        console.log('init');
    }

    goHome() {
        this.router.navigateByUrl('/');
    }

    selectPanel(panelId) {
        this.currentPanel = panelId;
    }
}

