import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SystemComponent} from "./system.component";
import {HlsPlayerModule} from "../../shared/hls-video/hls-player.module";

@NgModule({
    imports: [CommonModule, HlsPlayerModule],
    declarations: [SystemComponent],
    exports: [SystemComponent],
    providers: []
})
export class SystemModule { }
