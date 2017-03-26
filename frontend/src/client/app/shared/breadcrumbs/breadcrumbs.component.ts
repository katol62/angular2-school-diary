import { Component, Input } from '@angular/core';
import {GlobalEventsManager} from "../events/global-events.manager";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'sd-breadcrumbs',
    templateUrl: 'breadcrumbs.component.html',
    styleUrls: ['breadcrumbs.component.css']
})

export class BreadcrumbsComponent {

    @Input() pageTitle: string;
    @Input() pageSubTitle: string;

    constructor(private route: ActivatedRoute, public router:Router, public globalEventsManager:GlobalEventsManager) {}

    goHome() {
        this.globalEventsManager.selectedMenuItem('home');
        this.router.navigateByUrl('/');
    }

}
