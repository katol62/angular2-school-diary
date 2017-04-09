import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashboardMenuModule} from "../../menu/dashboard.menu.module";
import {DashParentScheduleComponent} from "./dash-parent-schedule.component";

@NgModule({
    imports: [CommonModule, DashboardMenuModule],
    declarations: [DashParentScheduleComponent],
    exports: [DashParentScheduleComponent],
    providers: []
})
export class DashParentScheduleModule { }
