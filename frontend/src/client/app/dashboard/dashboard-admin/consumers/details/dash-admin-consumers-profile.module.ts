import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {DashboardMenuModule} from "../../../menu/dashboard.menu.module";
import {DashAdminConsumersProfileComponent} from "./dash-admin-consumers-profile.component";
import { DatepickerModule } from 'ngx-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [CommonModule, DashboardMenuModule, FormsModule, ReactiveFormsModule, DatepickerModule.forRoot()],
    declarations: [DashAdminConsumersProfileComponent],
    exports: [DashAdminConsumersProfileComponent],
    providers: []
})
export class DashAdminConsumersProfileModule { }
