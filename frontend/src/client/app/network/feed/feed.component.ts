import { Component, OnInit, ElementRef } from '@angular/core';
import {Router} from "@angular/router";
import { DataFeed, DataService, GlobalEventsManager, AuthService } from "../../shared/index";

@Component({
    moduleId: module.id,
    selector: 'sd-network-feed',
    templateUrl: 'feed.component.html',
    styleUrls: ['feed.component.css'],
})


export class FeedComponent implements OnInit {

    feed: DataFeed [] = [];
    selectedPage:string = 'feed';

    constructor(private dataService: DataService, private globalEventsManager:GlobalEventsManager) { }

    ngOnInit() {
        this.feed = this.dataService.getFeed();
        this.globalEventsManager.selectedMenuItem('network');
    }

}
