import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardMenuModule } from '../../menu/dashboard.menu.module';
import { DashChiefTeachersComponent } from './dash-chief-teachers.component';

@NgModule({
    imports: [CommonModule, DashboardMenuModule],
    declarations: [DashChiefTeachersComponent],
    exports: [DashChiefTeachersComponent],
    providers: []
})
export class DashChiefTeachersModule { }
