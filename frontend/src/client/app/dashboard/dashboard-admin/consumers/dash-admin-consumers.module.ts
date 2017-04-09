import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashAdminConsumersComponent } from './dash-admin-consumers.component';
import { DashboardMenuModule } from '../../menu/dashboard.menu.module';

@NgModule({
    imports: [CommonModule, DashboardMenuModule],
    declarations: [DashAdminConsumersComponent],
    exports: [DashAdminConsumersComponent],
    providers: []
})
export class DashAdminConsumersModule { }
