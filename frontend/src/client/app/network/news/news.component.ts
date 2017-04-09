import { Component, OnInit, ElementRef } from '@angular/core';
import {Router} from "@angular/router";
import { DataNews, DataService, GlobalEventsManager, AuthService } from "../../shared/index";
import {GlobalSettings} from "../../shared/data/global-settings";

@Component({
    moduleId: module.id,
    selector: 'sd-network-news',
    templateUrl: 'news.component.html',
    styleUrls: ['news.component.css'],
})

export class NewsComponent implements OnInit {

    selectedPage:string = GlobalSettings.ROUTE_NETWORK_NEWS;
    
    news: DataNews [];
    selected:DataNews = null;

    constructor(private dataService: DataService, private globalEventsManager:GlobalEventsManager) { }

    ngOnInit() {
        this.news = this.dataService.getNews();
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
