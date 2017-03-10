import { Component, OnInit, ElementRef } from '@angular/core';
import { GlobalEventsManager, AuthService } from '../shared/index';
import { Router } from '@angular/router';
import { Mode } from '../shared/models/data/data-models';
import { MODES } from '../shared/data/test-data';
import { UserService } from '../shared/services/user.service';
import {User} from "../shared/models/user";

/**
 * This class represents the lazy loaded NetworkComponent.
 */
@Component({
    moduleId: module.id,
    selector: 'sd-network',
    templateUrl: 'network.component.html',
    styleUrls: ['network.component.css'],
})

export class NetworkComponent implements OnInit {

    title:string = 'Моя сеть';
    modes:Mode[] = MODES;
    currentMode:string = MODES[0].mode;
    currentUser:User = new User();

    constructor(public router:Router, public globalEventsManager:GlobalEventsManager, public authService:AuthService, private userService:UserService) {}

    ngOnInit() {
        console.log('init');
        this.currentUser = this.userService.getCurrentUser();
    }

    goHome() {
        this.router.navigateByUrl('/');
    }

    selectMode(modeObj:Mode) {
        this.currentMode = modeObj.mode;
    }

}
