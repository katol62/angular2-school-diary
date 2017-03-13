import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {VideoComponent} from "./video.component";

@NgModule({
    imports: [CommonModule],
    declarations: [VideoComponent],
    exports: [VideoComponent],
    providers: []
})
export class VideoModule { }
