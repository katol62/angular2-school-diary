import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EventsComponent} from "./events.component";

@NgModule({
    imports: [CommonModule],
    declarations: [EventsComponent],
    exports: [EventsComponent],
    providers: []
})
export class EventsModule { }
