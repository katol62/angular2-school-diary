import { Component, OnInit, ViewChild, Input, ElementRef } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'hls-player',
    templateUrl: 'hls-player.component.html',
    styleUrls: ['hls-player.component.css']
})

export class HlsPlayerComponent implements OnInit {

    @ViewChild('video') videoelm:ElementRef;
    video: HTMLVideoElement;

    width:number = 640;
    height:number = 480;

    sourceUrl:string = 'http://31.148.96.25/hls/live/index.m3u8';

    private hls: Hls;

    constructor() { }

    ngOnInit() {

        this.video = this.videoelm.nativeElement;
        this.hls = new Hls();

        this.hls.attachMedia(this.video);

        this.setVideoListeners();
        this.setHlsPlayerListeners();
    }

    loadSrc(src: string): void {
        if (src) {
            this.hls.loadSource(src);
        }
    }

    play(): void {
        this.video.play();
    }

    pause(): void {
        this.video.pause();
    }

    private setHlsPlayerListeners(): void {
        this.hls.on(Hls.Events.MEDIA_ATTACHED, () => {
            console.log('$$$ Hls::MEDIA_ATTACHED');
            if (this.sourceUrl && this.sourceUrl !== '') {
                this.loadSrc(this.sourceUrl);
            }
        });
        this.hls.on(Hls.Events.MANIFEST_PARSED, (event:any, data:any) => {
            console.log('$$$ hls::MANIFEST_PARSED::QualityLevels:');
            this.play();
        });
        this.hls.on(Hls.Events.ERROR, this.onHlsError.bind(this));
    }

    private setVideoListeners(): void {
        this.video.addEventListener('playing', () => {
            console.log('$$$ videoElement::playing');
        });
        this.video.addEventListener('pause', () => {
            console.log('$$$ videoElement::pause');
        });
        this.video.addEventListener('seeked', () => {
            console.log('$$$ videoElement::seeked');
        });
        this.video.addEventListener('seeking', () => {
            console.log('$$$ videoElement::seeking');
        });
        this.video.addEventListener('durationchange', () => {
            console.log('$$$ videoElement::durationchange :'+this.video.duration);
        });
        this.video.addEventListener('timeupdate', () => {
            console.log('$$$ videoElement::timeupdate :'+this.video.currentTime);
        });
    }

    private onHlsError(event: any, data: any): void {
        const errorType: string = data.type;
        const errorDetails: string = data.details;
        const errorFatal: boolean = data.fatal;

        console.log(`$$$ hls::ERROR::Type: ${errorType} Details: ${errorDetails} Fatal: ${errorFatal}`);

        if (errorFatal) {
            switch (errorType) {
                case Hls.ErrorTypes.NETWORK_ERROR:
                    console.log('$$$ hls::fatal network error encountered, try to recover');
                    this.hls.startLoad();
                    break;
                case Hls.ErrorTypes.MEDIA_ERROR:
                    console.log('$$$ hls::fatal media error encountered, try to recover');
                    this.hls.recoverMediaError();
                    break;
                default:
                    console.log('$$$ hls::non-recoverable error encountered, destroying');
                    this.hls.destroy();
                    break;
            }
        }
    }


}