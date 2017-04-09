import { Component, OnInit, ElementRef } from '@angular/core';
import {GlobalEventsManager} from "../shared/events/global-events.manager";
declare var jQuery:any;

/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
    moduleId: module.id,
    selector: 'sd-intro',
    templateUrl: 'intro.component.html',
    styleUrls: ['intro.component.css'],
})
export class IntroComponent implements OnInit {

    images: any[];

    constructor(private el: ElementRef, public globalEventsManager: GlobalEventsManager) {}

    ngOnInit() {
        this.globalEventsManager.showToolBar(true);

        this.images = [];
        this.images.push({id: 0, source:'./assets/img/city-q-c-800-350-2.jpg', alt:'Description for Image 1', title:'Title 1'});
        this.images.push({id: 1, source:'./assets/img/city-q-c-800-350-3.jpg', alt:'Description for Image 2', title:'Title 2'});
        this.images.push({id: 2, source:'./assets/img/city-q-c-800-350-4.jpg', alt:'Description for Image 3', title:'Title 3'});
        // this.images.push({source:'./assets/img/city-q-c-800-350-7.jpg', alt:'Description for Image 4', title:'Title 4'});
        // this.images.push({source:'./assets/img/city-q-c-800-350-8.jpg', alt:'Description for Image 5', title:'Title 5'});
        // this.images.push({source:'./assets/img/city-q-c-800-350-9.jpg', alt:'Description for Image 6', title:'Title 6'});

        let elm:any = this.el.nativeElement.getElementsByClassName('carousel');
        
        jQuery(elm).carousel(() => {
            console.log('carousel');
        });

        this.globalEventsManager.selectedMenuItem('');

    }

    ngAfterViewChecked() {
        console.log('ngAfterViewChecked');
    }

}
