import { Component, OnInit, ElementRef } from '@angular/core';
import {Router} from '@angular/router';
import { DataFriend, DataService, GlobalEventsManager, AuthService } from '../../shared/index';

@Component({
    moduleId: module.id,
    selector: 'sd-network-friends',
    templateUrl: 'friends.component.html',
    styleUrls: ['friends.component.css'],
})


export class FriendsComponent implements OnInit {

    friendList: DataFriend [] = [];
    selectedPage:string = 'friends';

    constructor(private dataService: DataService, private globalEventsManager:GlobalEventsManager) { }

    ngOnInit() {
        this.friendList = this.dataService.getFriends();
        this.globalEventsManager.selectedMenuItem('network');
    }

}
