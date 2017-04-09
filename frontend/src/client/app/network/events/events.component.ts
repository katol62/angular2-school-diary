import { Component, OnInit, ElementRef } from '@angular/core';
import {Router} from '@angular/router';
import { DataNews, DataService, AuthService } from '../../shared/index';
import {GlobalSettings} from "../../shared/data/global-settings";
import {GlobalEventsManager} from "../../shared/events/global-events.manager";

@Component({
    moduleId: module.id,
    selector: 'sd-network-events',
    templateUrl: 'events.component.html',
    styleUrls: ['events.component.css'],
})


export class EventsComponent implements OnInit {

    events: DataNews [];
    selected:DataNews = null;
    selectedPage:string = GlobalSettings.ROUTE_NETWORK_EVENTS;

    constructor(private dataService: DataService, private globalEventsManager:GlobalEventsManager) { }

    ngOnInit() {
        this.events = this.dataService.getEvents();
        this.globalEventsManager.selectedMenuItem(GlobalSettings.ROUTE_NETWORK);
    }

    toggle(elm:DataNews) {
        elm.showMore = !elm.showMore;
    }

    details(elm:DataNews) {
        this.selected = elm;
    }

    backToList() {
        this.selected = null;
    }

}
