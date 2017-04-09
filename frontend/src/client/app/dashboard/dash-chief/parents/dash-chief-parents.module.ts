import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardMenuModule } from '../../menu/dashboard.menu.module';
import { DashChiefParentsComponent } from './dash-chief-parents.component';

@NgModule({
    imports: [CommonModule, DashboardMenuModule],
    declarations: [DashChiefParentsComponent],
    exports: [DashChiefParentsComponent],
    providers: []
})
export class DashChiefParentsModule { }
