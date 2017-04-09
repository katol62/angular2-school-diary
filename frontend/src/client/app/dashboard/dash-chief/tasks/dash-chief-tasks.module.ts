import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashboardMenuModule} from "../../menu/dashboard.menu.module";
import {DashChiefTasksComponent} from "./dash-chief-tasks.component";

@NgModule({
    imports: [CommonModule, DashboardMenuModule],
    declarations: [DashChiefTasksComponent],
    exports: [DashChiefTasksComponent],
    providers: []
})
export class DashChiefTasksModule { }
