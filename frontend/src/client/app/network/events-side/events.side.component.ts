import { Component, OnInit, ElementRef } from '@angular/core';
import { GlobalEventsManager, AuthService } from '../../shared/index';
import {Router} from "@angular/router";

@Component({
    moduleId: module.id,
    selector: 'sd-sidebar-events',
    templateUrl: 'events.side.component.html',
    styleUrls: ['events.side.component.css'],
})

export class EventsSidebarComponent implements OnInit {

    show:boolean = false;

    constructor(public router:Router, public globalEventsManager:GlobalEventsManager, public authService:AuthService) {}

    triggerShow() {
        this.show = !this.show;
    }

}