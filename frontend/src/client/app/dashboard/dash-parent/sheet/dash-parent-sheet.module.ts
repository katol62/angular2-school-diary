import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardMenuModule } from '../../menu/dashboard.menu.module';
import { DashParentSheetComponent } from './dash-parent-sheet.component';

@NgModule({
    imports: [CommonModule, DashboardMenuModule],
    declarations: [DashParentSheetComponent],
    exports: [DashParentSheetComponent],
    providers: []
})
export class DashParentSheetModule { }
