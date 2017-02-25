import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GalleriaModule} from 'primeng/primeng';
import {IntroRoutingModule} from "./intro-routing.module";
import {IntroComponent} from "./intro.component";

@NgModule({
    imports: [CommonModule, IntroRoutingModule, GalleriaModule],
    declarations: [IntroComponent],
    exports: [IntroComponent],
    providers: []
})
export class IntroModule { }
