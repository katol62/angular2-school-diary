import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashAdminSchoolsComponent } from './dash-admin-schools.component';
import { DashboardMenuModule } from '../../menu/dashboard.menu.module';

@NgModule({
    imports: [CommonModule, DashboardMenuModule],
    declarations: [DashAdminSchoolsComponent],
    exports: [DashAdminSchoolsComponent],
    providers: []
})
export class DashAdminSchoolsModule { }
