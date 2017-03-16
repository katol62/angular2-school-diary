import { Component, AfterViewInit, ElementRef, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GlobalEventsManager, AuthService } from '../index';
import { Player, PlayerOptions, Source } from '@types/videojs';
//import * as videojs from '@types/';
//import * as videojs from 'video.js/dist/video.js';
import * as videojs from 'videojs'

/**
 * This class represents the toolbar component.
 */
@Component({
    moduleId: module.id,
    selector: 'sd-video',
    templateUrl: 'video.component.html',
    styleUrls: ['video.component.css']
})
export class VideoComponent implements AfterViewInit, OnInit, OnDestroy {

    @ViewChild('video') video:any;
    private _elementRef: ElementRef;
    private videoJSplayer : Player;

    constructor(elementRef: ElementRef) {
        this._elementRef = elementRef
    }

    ngOnInit() {
        console.log('init');
    }

    ngAfterViewInit() {

        let options:any = {'flash': { 'swf': './assets/img/video-js.swf'}, 'techOrder': ['flash', 'html5'], 'autoplay': true};

        this.videoJSplayer = videojs(this.video.nativeElement, options, () => {
            console.log('Good to go!');

            let source:any = {
                src: 'https://d2zihajmogu5jn.cloudfront.net/bipbop-advanced/bipbop_16x9_variant.m3u8',
                type: 'application/x-mpegURL',
                withCredentials: false
            };
            // source.src = 'rtsp://mpv.cdn3.bigCDN.com:554/bigCDN/mp4:bigbuckbunnyiphone_400.mp4';
            // source.type = 'application/x-mpegURL';

            this.videoJSplayer.src(source); // if you don't trust autoplay for some reason
            //this.videoJSplayer.src({'src':'rtsp://admin:admin@92.38.126.49:564/cam/realmonitor?channel=1&subtype=1', 'type':'application/vnd.apple.mpegurl'}); // if you don't trust autoplay for some reason
            //this.videoJSplayer.src({'src':'http://www.streambox.fr/playlists/x36xhzz/x36xhzz.m3u8', 'type':'application/vnd.apple.mpegurl'}); // if you don't trust autoplay for some reason
            //this.videoJSplayer.play(); // if you don't trust autoplay for some reason

            // How about an event listener?
            this.videoJSplayer.on('ended', function() {
                console.log('awww...over so soon?');
            });
        });
    }

    ngOnDestroy() {
        console.log('Deinit - Destroyed Component')
        this.videoJSplayer.dispose()
    }

}

