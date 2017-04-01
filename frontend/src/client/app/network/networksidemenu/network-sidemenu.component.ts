import { Component, OnInit, ElementRef, Input } from '@angular/core';
import { Router } from '@angular/router';
import {UserService} from "../../shared/services/user.service";
import {User} from "../../shared/models/user";
import {GlobalEventsManager} from "../../shared/events/global-events.manager";

/**
 * This class represents the lazy loaded NetworkComponent.
 */
@Component({
    moduleId: module.id,
    selector: 'sd-network-sidemenu',
    templateUrl: 'network-sidemenu.component.html',
    styleUrls: ['network-sidemenu.component.css'],
})


export class NetworkSidemenuComponent implements OnInit {

    menuElements: any[] = [
        {id: 1, title: 'Новости', page: 'news', icon: 'fa-file-text'},
        {id: 2, title: 'Сообщения', page: 'feed', icon: 'fa-commenting'},
        {id: 3, title: 'События', page: 'events', icon: 'fa-calendar'},
        {id: 4, title: 'Друзья', page: 'friends', icon: 'fa-users'}
    ];

    currentUser:User = new User();

    @Input() selectedPage:string;

    constructor(public router:Router, private userService:UserService, public globalEventsManager:GlobalEventsManager) {}

    ngOnInit() {
        console.log('init');
        this.currentUser = this.userService.getCurrentUser();
    }

    goHome() {
        this.router.navigateByUrl('/');
    }

    selectPage(page:string) {
        this.router.navigateByUrl('/network/'+page);
        this.globalEventsManager.selectedMenuItem('network');
    }

}