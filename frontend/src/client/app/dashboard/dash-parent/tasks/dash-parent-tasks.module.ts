import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardMenuModule } from '../../menu/dashboard.menu.module';
import { DashParentTasksComponent } from './dash-parent-tasks.component';

@NgModule({
    imports: [CommonModule, DashboardMenuModule],
    declarations: [DashParentTasksComponent],
    exports: [DashParentTasksComponent],
    providers: []
})
export class DashParentTasksModule { }
