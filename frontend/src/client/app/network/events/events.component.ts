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

    constructor(private dataService: DataService) { }

    ngOnInit() {
        this.events = this.dataService.getEvents();
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
