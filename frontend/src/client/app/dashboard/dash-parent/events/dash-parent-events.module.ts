import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashboardMenuModule} from "../../menu/dashboard.menu.module";
import {DashParentEventsComponent} from "./dash-parent-events.component";

@NgModule({
    imports: [CommonModule, DashboardMenuModule],
    declarations: [DashParentEventsComponent],
    exports: [DashParentEventsComponent],
    providers: []
})
export class DashParentEventsModule { }
