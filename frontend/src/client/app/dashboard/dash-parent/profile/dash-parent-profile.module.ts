import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardMenuModule } from '../../menu/dashboard.menu.module';
import { DashParentProfileComponent } from './dash-parent-profile.component';

@NgModule({
    imports: [CommonModule, DashboardMenuModule],
    declarations: [DashParentProfileComponent],
    exports: [DashParentProfileComponent],
    providers: []
})
export class DashParentProfileModule { }
