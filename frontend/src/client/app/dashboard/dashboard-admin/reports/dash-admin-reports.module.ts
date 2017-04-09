import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashboardMenuModule} from "../../menu/dashboard.menu.module";
import {DashAdminReportsComponent} from "./dash-admin-reports.component";

@NgModule({
    imports: [CommonModule, DashboardMenuModule],
    declarations: [DashAdminReportsComponent],
    exports: [DashAdminReportsComponent],
    providers: []
})
export class DashAdminReportsModule { }
