import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {DashAdminConsumersDetailsComponent} from "./dash-admin-consumers-details.component";
import {DashboardMenuModule} from "../../../menu/dashboard.menu.module";

@NgModule({
    imports: [CommonModule, DashboardMenuModule, FormsModule, ReactiveFormsModule],
    declarations: [DashAdminConsumersDetailsComponent],
    exports: [DashAdminConsumersDetailsComponent],
    providers: []
})
export class DashAdminConsumersDetailsModule { }
