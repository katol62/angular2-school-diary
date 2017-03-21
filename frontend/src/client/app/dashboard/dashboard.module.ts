import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { ProfileModule } from './profile/profile.module';
import {SchoolsModule} from './schools/schools.module';
import {DashboardMenuModule} from "./menu/index";
import {SystemModule} from './system/system.module';
import {ConsumersModule} from "./consumers/consumers.module";
import {SvideoModule} from "../shared/simple-video/svideo.module";

@NgModule({
    imports: [CommonModule,
        DashboardRoutingModule,
        ProfileModule,
        SchoolsModule,
        SystemModule,
        ConsumersModule,
        SvideoModule,
        DashboardMenuModule
    ],
    declarations: [DashboardComponent],
    exports: [DashboardComponent],
    providers: []
})
export class DashboardModule {}
