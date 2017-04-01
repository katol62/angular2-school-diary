import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NetworkRightbarComponent} from "./network-rightbar.component";
import {EventsSidebarModule} from "../events-side/events.side.module";

@NgModule({
    imports: [CommonModule, EventsSidebarModule],
    declarations: [NetworkRightbarComponent],
    exports: [NetworkRightbarComponent],
    providers: []
})
export class NetworkRightbarModule { }
