import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardMenuModule } from '../../menu/dashboard.menu.module';
import { DashTeacherSheetComponent } from './dash-teacher-sheet.component';

@NgModule({
    imports: [CommonModule, DashboardMenuModule],
    declarations: [DashTeacherSheetComponent],
    exports: [DashTeacherSheetComponent],
    providers: []
})
export class DashTeacherSheetModule { }
