import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardMenuModule } from '../../menu/dashboard.menu.module';
import { DashChiefEventsComponent } from './dash-chief-events.component';

@NgModule({
    imports: [CommonModule, DashboardMenuModule],
    declarations: [DashChiefEventsComponent],
    exports: [DashChiefEventsComponent],
    providers: []
})
export class DashChiefEventsModule { }
