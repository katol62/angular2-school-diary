import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashboardMenuModule} from "../../menu/dashboard.menu.module";
import {DashTeacherScheduleComponent} from "./dash-teacher-schedule.component";

@NgModule({
    imports: [CommonModule, DashboardMenuModule],
    declarations: [DashTeacherScheduleComponent],
    exports: [DashTeacherScheduleComponent],
    providers: []
})
export class DashTeacherScheduleModule { }
