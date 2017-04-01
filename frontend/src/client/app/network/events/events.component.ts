import { Component, OnInit, ElementRef } from '@angular/core';
import {Router} from '@angular/router';
import { DataNews, DataService, GlobalEventsManager, AuthService } from '../../shared/index';

@Component({
    moduleId: module.id,
    selector: 'sd-network-events',
    templateUrl: 'events.component.html',
    styleUrls: ['events.component.css'],
})


export class EventsComponent implements OnInit {

    events: DataNews [];
    selected:DataNews = null;
    selectedPage:string = 'events';

    constructor(private dataService: DataService, private globalEventsManager:GlobalEventsManager) { }

    ngOnInit() {
        this.events = this.dataService.getEvents();
        this.globalEventsManager.selectedMenuItem('network');
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
