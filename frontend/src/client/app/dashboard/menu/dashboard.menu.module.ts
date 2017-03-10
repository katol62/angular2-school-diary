import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashboardMenuComponent} from "./dashboard.menu.component";

@NgModule({
    imports: [CommonModule],
    declarations: [DashboardMenuComponent],
    exports: [DashboardMenuComponent],
    providers: []
})
export class DashboardMenuModule { }
