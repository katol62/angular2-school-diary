import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardMenuModule } from '../../menu/dashboard.menu.module';
import { DashChiefPlanComponent } from './dash-chief-plan.component';

@NgModule({
    imports: [CommonModule, DashboardMenuModule],
    declarations: [DashChiefPlanComponent],
    exports: [DashChiefPlanComponent],
    providers: []
})
export class DashChiefPlanModule { }
