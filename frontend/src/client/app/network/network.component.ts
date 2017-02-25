import { Component, OnInit, ElementRef } from '@angular/core';
import { GlobalEventsManager } from '../shared/index';
import {Router} from "@angular/router";

/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
    moduleId: module.id,
    selector: 'sd-network',
    templateUrl: 'network.component.html',
    styleUrls: ['network.component.css'],
})

export class NetworkComponent implements OnInit {

    title:string = 'Моя сеть';

    constructor(public router:Router, public globalEventsManager:GlobalEventsManager) {}

    ngOnInit() {
        console.log('init')
    }

    goHome() {
        this.router.navigateByUrl('/');
    }
}