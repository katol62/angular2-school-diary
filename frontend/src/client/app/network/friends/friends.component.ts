import { Component, OnInit, ElementRef } from '@angular/core';
import { GlobalEventsManager, AuthService } from '../shared/index';
import {Router} from "@angular/router";
import {DataFriend, DataService} from "../../shared/index";

@Component({
    moduleId: module.id,
    selector: 'sd-network-friends',
    templateUrl: 'friends.component.html',
    styleUrls: ['friends.component.css'],
})


export class FriendsComponent implements OnInit {

    friendList: DataFriend [] = [];

    constructor(private dataService: DataService) { }

    ngOnInit() {
        this.friendList = this.dataService.getFriends();
    }

}