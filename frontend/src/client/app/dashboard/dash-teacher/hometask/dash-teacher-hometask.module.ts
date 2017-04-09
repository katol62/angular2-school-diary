import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardMenuModule } from '../../menu/dashboard.menu.module';
import { DashTeacherHometaskComponent } from './dash-teacher-hometask.component';

@NgModule({
    imports: [CommonModule, DashboardMenuModule],
    declarations: [DashTeacherHometaskComponent],
    exports: [DashTeacherHometaskComponent],
    providers: []
})
export class DashTeachersHometaskModule { }
