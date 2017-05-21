import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashboardMenuModule} from "../../../menu/dashboard.menu.module";
import {DashAdminConsumersProfileComponent} from "./dash-admin-consumers-profile.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {CalendarModule, DropdownModule, RadioButtonModule, InputTextModule, ButtonModule} from 'primeng/primeng';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    imports: [CommonModule, DashboardMenuModule, FormsModule, ReactiveFormsModule, CalendarModule, BrowserAnimationsModule, RadioButtonModule, DropdownModule, InputTextModule, ButtonModule],
    declarations: [DashAdminConsumersProfileComponent],
    exports: [DashAdminConsumersProfileComponent],
    providers: []
})
export class DashAdminConsumersProfileModule { }
