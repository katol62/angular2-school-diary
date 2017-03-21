import { Component, OnInit, OnDestroy, AfterViewInit, ElementRef, Input, ViewChild } from '@angular/core';
import * as videojs from 'videojs';

@Component({
    moduleId: module.id,
    selector: 'sd-videojs',
    templateUrl: 'svideo.component.html',
    styleUrls: ['svideo.component.css']
})

export class SvideoComponent implements AfterViewInit, OnInit, OnDestroy {

    // reference to the element itself, we use this to access events and methods
    private _elementRef: ElementRef;

    // index to create unique ID for component
    @Input() idx: string;

    // video asset url
    @Input() url: any;

    // video asset type
    @Input() type: any;

    // declare player var
    private player: any;

    // constructor initializes our declared vars
    constructor(elementRef: ElementRef) {
        this.url = false;
        this.player = false;
        this._elementRef = elementRef;
    }

    ngOnInit() {
        console.log('init');
    }

    ngAfterViewInit() {
        // ID with which to access the template's video element
        let el = 'video_' + this.idx;

        // setup the player via the unique element ID
        this.player = videojs(document.getElementById(el), {}, () => {

            // Store the video object
            let id = this.player.id;
            this.player.play();

        });
    }

    ngOnDestroy() {
        console.log('Deinit - Destroyed Component')
        this.player.dispose()
    }

}