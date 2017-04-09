import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashboardMenuModule} from "../../menu/dashboard.menu.module";
import {DashTeacherEventsComponent} from "./dash-teacher-events.component";

@NgModule({
    imports: [CommonModule, DashboardMenuModule],
    declarations: [DashTeacherEventsComponent],
    exports: [DashTeacherEventsComponent],
    providers: []
})
export class DashTeacherEventsModule { }
