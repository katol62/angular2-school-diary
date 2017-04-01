import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsComponent } from './events.component';
import {NetworkRightbarModule} from "../networkrightbar/network-rightbar.module";
import {NetworkSidemenuModule} from "../networksidemenu/network-sidemenu.module";
import {NetworkEventsRoutingModule} from "./events-routing.module";

@NgModule({
    imports: [CommonModule, NetworkRightbarModule, NetworkSidemenuModule, NetworkEventsRoutingModule],
    declarations: [EventsComponent],
    exports: [EventsComponent],
    providers: []
})
export class EventsModule { }
