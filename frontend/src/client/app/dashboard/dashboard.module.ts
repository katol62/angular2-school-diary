import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { DashboardMenuModule } from "./menu/index";
import { SvideoModule } from '../shared/simple-video/svideo.module';
import {BreadcrumbsModule} from "../shared/breadcrumbs/breadcrumbs.module";
import {HlsPlayerModule} from "../shared/hls-video/hls-player.module";
import {DashAdminConsumersModule} from "./dashboard-admin/consumers/dash-admin-consumers.module";
import {DashAdminSchoolsModule} from "./dashboard-admin/schools/dash-admin-schools.module";
import {DashAdminSystemModule} from "./dashboard-admin/system/dash-admin-system.module";
import {DashTeacherProfileModule} from "./dash-teacher/profile/dash-teacher-profile.module";
import {DashParentProfileModule} from "./dash-parent/profile/dash-parent-profile.module";
import {DashAdminReportsModule} from "./dashboard-admin/reports/dash-admin-reports.module";
import {DashParentScheduleModule} from "./dash-parent/schedule/dash-parent-schedule.module";
import {DashParentHometaskModule} from "./dash-parent/hometask/dash-parent-hometask.module";
import {DashParentSheetModule} from "./dash-parent/sheet/dash-parent-sheet.module";
import {DashParentEventsModule} from "./dash-parent/events/dash-parent-events.module";
import {DashParentTasksModule} from "./dash-parent/tasks/dash-parent-tasks.module";
import {DashChiefProfileModule} from "./dash-chief/profile/dash-chief-profile.module";
import {DashChiefPlanModule} from "./dash-chief/plan/dash-chief-plan.module";
import {DashChiefScheduleModule} from "./dash-chief/schedule/dash-chief-schedule.module";
import {DashChiefTeachersModule} from "./dash-chief/teachers/dash-chief-teachers.module";
import {DashChiefCoursesModule} from "./dash-chief/courses/dash-chief-courses.module";
import {DashChiefParentsModule} from "./dash-chief/parents/dash-chief-parents.module";
import {DashChiefStudentsModule} from "./dash-chief/students/dash-chief-students.module";
import {DashChiefEventsModule} from "./dash-chief/events/dash-chief-events.module";
import {DashChiefTasksModule} from "./dash-chief/tasks/dash-chief-tasks.module";
import {DashChiefMealsModule} from "./dash-chief/meals/dash-chief-meals.module";
import {DashTeacherEventsModule} from "./dash-teacher/events/dash-teacher-events.module";
import {DashTeachersHometaskModule} from "./dash-teacher/hometask/dash-teacher-hometask.module";
import {DashTeacherScheduleModule} from "./dash-teacher/schedule/dash-teacher-schedule.module";
import {DashTeacherSheetModule} from "./dash-teacher/sheet/dash-teacher-sheet.module";
import {DashTeacherTasksModule} from "./dash-teacher/tasks/dash-teacher-tasks.module";

@NgModule({
    imports: [CommonModule,
        DashboardRoutingModule,
        SvideoModule,
        HlsPlayerModule,
        BreadcrumbsModule,
        DashboardMenuModule,
        DashAdminConsumersModule,
        DashAdminSchoolsModule,
        DashAdminSystemModule,
        DashAdminReportsModule,
        DashTeacherProfileModule,
        DashParentProfileModule,
        DashParentScheduleModule,
        DashParentHometaskModule,
        DashParentSheetModule,
        DashParentEventsModule,
        DashParentTasksModule,
        DashChiefProfileModule,
        DashChiefPlanModule,
        DashChiefScheduleModule,
        DashChiefTeachersModule,
        DashChiefCoursesModule,
        DashChiefParentsModule,
        DashChiefStudentsModule,
        DashChiefEventsModule,
        DashChiefTasksModule,
        DashChiefMealsModule,
        DashTeacherProfileModule,
        DashTeacherEventsModule,
        DashTeachersHometaskModule,
        DashTeacherScheduleModule,
        DashTeacherSheetModule,
        DashTeacherTasksModule
    ],
    declarations: [DashboardComponent],
    exports: [DashboardComponent],
    providers: []
})
export class DashboardModule {}
