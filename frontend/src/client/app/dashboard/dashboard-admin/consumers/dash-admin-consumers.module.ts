import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DashAdminConsumersComponent } from './dash-admin-consumers.component';
import { DashboardMenuModule } from '../../menu/dashboard.menu.module';

@NgModule({
    imports: [CommonModule, DashboardMenuModule, FormsModule, ReactiveFormsModule],
    declarations: [DashAdminConsumersComponent],
    exports: [DashAdminConsumersComponent],
    providers: []
})
export class DashAdminConsumersModule { }
