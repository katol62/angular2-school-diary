import { Component, OnInit, ElementRef } from '@angular/core';
import {Router} from "@angular/router";
import { DataFeed, DataService, GlobalEventsManager, AuthService } from "../../shared/index";
import {GlobalSettings} from "../../shared/data/global-settings";

@Component({
    moduleId: module.id,
    selector: 'sd-network-feed',
    templateUrl: 'feed.component.html',
    styleUrls: ['feed.component.css'],
})


export class FeedComponent implements OnInit {

    feed: DataFeed [] = [];
    selectedPage:string = GlobalSettings.ROUTE_NETWORK_FEED;

    constructor(private dataService: DataService, private globalEventsManager:GlobalEventsManager) { }

    ngOnInit() {
        this.feed = this.dataService.getFeed();
        this.globalEventsManager.selectedMenuItem(GlobalSettings.ROUTE_NETWORK);
    }

}
