import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashboardMenuModule} from "../../menu/dashboard.menu.module";
import {DashTeacherProfileComponent} from "./dash-teacher-profile.component";

@NgModule({
    imports: [CommonModule, DashboardMenuModule],
    declarations: [DashTeacherProfileComponent],
    exports: [DashTeacherProfileComponent],
    providers: []
})
export class DashTeacherProfileModule { }
