import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SystemComponent} from "./system.component";
import {SvideoModule} from "../../shared/simple-video/svideo.module";

@NgModule({
    imports: [CommonModule, SvideoModule],
    declarations: [SystemComponent],
    exports: [SystemComponent],
    providers: []
})
export class SystemModule { }
