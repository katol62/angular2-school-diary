import { Component, OnInit, ElementRef } from '@angular/core';
import {Router} from "@angular/router";
import { DataNews, DataService, GlobalEventsManager, AuthService } from "../../shared/index";

@Component({
    moduleId: module.id,
    selector: 'sd-network-news',
    templateUrl: 'news.component.html',
    styleUrls: ['news.component.css'],
})

export class NewsComponent implements OnInit {

    news: DataNews [];
    selected:DataNews = null;

    constructor(private dataService: DataService) { }

    ngOnInit() {
        this.news = this.dataService.getNews();
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
