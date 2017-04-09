import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashboardMenuModule} from "../../menu/dashboard.menu.module";
import {DashChiefStudentsComponent} from "./dash-chief-students.component";

@NgModule({
    imports: [CommonModule, DashboardMenuModule],
    declarations: [DashChiefStudentsComponent],
    exports: [DashChiefStudentsComponent],
    providers: []
})
export class DashChiefStudentsModule { }
