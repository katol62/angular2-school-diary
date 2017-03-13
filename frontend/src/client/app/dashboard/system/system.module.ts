import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SystemComponent} from "./system.component";
import {VideoModule} from "../../shared/video/video.module";

@NgModule({
    imports: [CommonModule, VideoModule],
    declarations: [SystemComponent],
    exports: [SystemComponent],
    providers: []
})
export class SystemModule { }
