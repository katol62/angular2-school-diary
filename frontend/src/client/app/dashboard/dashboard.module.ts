import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { ProfileModule } from './profile/profile.module';

@NgModule({
    imports: [CommonModule, DashboardRoutingModule, ProfileModule],
    declarations: [DashboardComponent],
    exports: [DashboardComponent],
    providers: []
})
export class DashboardModule {}
