import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashboardMenuModule} from "../../../menu/dashboard.menu.module";
import {DashAdminConsumersProfileComponent} from "./dash-admin-consumers-profile.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {CalendarModule, AutoCompleteModule, DropdownModule} from 'primeng/primeng';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    imports: [CommonModule, DashboardMenuModule, FormsModule, ReactiveFormsModule, CalendarModule, BrowserAnimationsModule, AutoCompleteModule, DropdownModule],
    declarations: [DashAdminConsumersProfileComponent],
    exports: [DashAdminConsumersProfileComponent],
    providers: []
})
export class DashAdminConsumersProfileModule { }
