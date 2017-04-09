import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashboardMenuModule} from "../../menu/dashboard.menu.module";
import {DashChiefCoursesComponent} from "./dash-chief-courses.component";

@NgModule({
    imports: [CommonModule, DashboardMenuModule],
    declarations: [DashChiefCoursesComponent],
    exports: [DashChiefCoursesComponent],
    providers: []
})
export class DashChiefCoursesModule { }
