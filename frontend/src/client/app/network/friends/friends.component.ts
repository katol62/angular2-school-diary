import { Component, OnInit, ElementRef } from '@angular/core';
import {Router} from '@angular/router';
import { DataFriend, DataService, AuthService } from '../../shared/index';
import {GlobalSettings} from "../../shared/data/global-settings";
import {GlobalEventsManager} from "../../shared/events/global-events.manager";

@Component({
    moduleId: module.id,
    selector: 'sd-network-friends',
    templateUrl: 'friends.component.html',
    styleUrls: ['friends.component.css'],
})


export class FriendsComponent implements OnInit {

    friendList: DataFriend [] = [];
    selectedPage:string = GlobalSettings.ROUTE_NETWORK_FRIENDS;

    constructor(private dataService: DataService, private globalEventsManager:GlobalEventsManager) { }

    ngOnInit() {
        this.friendList = this.dataService.getFriends();
        this.globalEventsManager.selectedMenuItem(GlobalSettings.ROUTE_NETWORK);
    }

}
