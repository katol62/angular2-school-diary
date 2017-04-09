import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashAdminSystemComponent } from './dash-admin-system.component';
import { HlsPlayerModule } from '../../../shared/hls-video/hls-player.module';
import { DashboardMenuModule } from '../../menu/dashboard.menu.module';

@NgModule({
    imports: [CommonModule, HlsPlayerModule, DashboardMenuModule],
    declarations: [DashAdminSystemComponent],
    exports: [DashAdminSystemComponent],
    providers: []
})
export class DashAdminSystemModule { }
