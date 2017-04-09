import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashboardMenuModule} from "../../menu/dashboard.menu.module";
import {DashChiefScheduleComponent} from "./dash-chief-schedule.component";

@NgModule({
    imports: [CommonModule, DashboardMenuModule],
    declarations: [DashChiefScheduleComponent],
    exports: [DashChiefScheduleComponent],
    providers: []
})
export class DashChiefScheduleModule { }
