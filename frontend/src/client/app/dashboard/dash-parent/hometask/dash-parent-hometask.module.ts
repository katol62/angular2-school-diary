import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashboardMenuModule} from "../../menu/dashboard.menu.module";
import {DashParentHometaskComponent} from "./dash-parent-hometask.component";

@NgModule({
    imports: [CommonModule, DashboardMenuModule],
    declarations: [DashParentHometaskComponent],
    exports: [DashParentHometaskComponent],
    providers: []
})
export class DashParentHometaskModule { }
