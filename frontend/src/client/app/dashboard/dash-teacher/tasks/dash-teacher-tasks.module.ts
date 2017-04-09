import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashboardMenuModule} from "../../menu/dashboard.menu.module";
import {DashTeacherTasksComponent} from "./dash-teacher-tasks.component";

@NgModule({
    imports: [CommonModule, DashboardMenuModule],
    declarations: [DashTeacherTasksComponent],
    exports: [DashTeacherTasksComponent],
    providers: []
})
export class DashTeacherTasksModule { }
