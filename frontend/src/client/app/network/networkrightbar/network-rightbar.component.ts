import { Component, OnInit, ElementRef, Input } from '@angular/core';
//import { GlobalEventsManager, AuthService } from '../shared/index';
import { Router } from '@angular/router';

/**
 * This class represents the lazy loaded NetworkComponent.
 */
@Component({
    moduleId: module.id,
    selector: 'sd-network-rightbar',
    templateUrl: 'network-rightbar.component.html',
    styleUrls: ['network-rightbar.component.css'],
})


export class NetworkRightbarComponent implements OnInit {

    constructor(public router:Router) {}

    ngOnInit() {
        console.log('init');
    }

}