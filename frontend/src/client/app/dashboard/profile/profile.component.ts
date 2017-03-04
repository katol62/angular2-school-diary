import { Component, OnInit, ElementRef } from '@angular/core';
import {Router} from '@angular/router';
import { GlobalEventsManager, AuthService } from '../../shared/index';

@Component({
    moduleId: module.id,
    selector: 'sd-dashboard-profile',
    templateUrl: 'profile.component.html',
    styleUrls: ['profile.component.css'],
})


export class ProfileComponent implements OnInit {

    constructor(private globalEventManager:GlobalEventsManager) { }

    ngOnInit() {
        console.log('init');
    }

}
