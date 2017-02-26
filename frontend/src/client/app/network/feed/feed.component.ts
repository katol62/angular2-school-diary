import { Component, OnInit, ElementRef } from '@angular/core';
import { GlobalEventsManager, AuthService } from '../shared/index';
import {Router} from "@angular/router";
import {DataFeed, DataService} from "../../shared/index";

@Component({
    moduleId: module.id,
    selector: 'sd-network-feed',
    templateUrl: 'feed.component.html',
    styleUrls: ['feed.component.css'],
})


export class FeedComponent implements OnInit {

    feed: DataFeed [] = [];

    constructor(private dataService: DataService) { }

    ngOnInit() {
        this.feed = this.dataService.getFeed();
    }

}