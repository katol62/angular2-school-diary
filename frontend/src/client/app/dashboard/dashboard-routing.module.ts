import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard, GlobalSettings } from '../shared/index';
import { DashAdminConsumersComponent } from './dashboard-admin/consumers/dash-admin-consumers.component';
import { DashAdminSchoolsComponent } from './dashboard-admin/schools/dash-admin-schools.component';
import { DashAdminSystemComponent } from './dashboard-admin/system/dash-admin-system.component';
import { DashParentProfileComponent } from './dash-parent/profile/dash-parent-profile.component';
import { DashTeacherProfileComponent } from './dash-teacher/profile/dash-teacher-profile.component';
import { DashAdminReportsComponent } from './dashboard-admin/reports/dash-admin-reports.component';
import { DashParentScheduleComponent } from './dash-parent/schedule/dash-parent-schedule.component';
import { DashParentHometaskComponent } from './dash-parent/hometask/dash-parent-hometask.component';
import { DashParentSheetComponent } from './dash-parent/sheet/dash-parent-sheet.component';
import { DashParentEventsComponent } from './dash-parent/events/dash-parent-events.component';
import { DashParentTasksComponent } from './dash-parent/tasks/dash-parent-tasks.component';
import { DashChiefProfileComponent } from './dash-chief/profile/dash-chief-profile.component';
import { DashChiefPlanComponent } from './dash-chief/plan/dash-chief-plan.component';
import { DashChiefScheduleComponent } from './dash-chief/schedule/dash-chief-schedule.component';
import { DashChiefCoursesComponent } from './dash-chief/courses/dash-chief-courses.component';
import { DashChiefTeachersComponent } from './dash-chief/teachers/dash-chief-teachers.component';
import { DashChiefStudentsComponent } from './dash-chief/students/dash-chief-students.component';
import { DashChiefParentsComponent } from './dash-chief/parents/dash-chief-parents.component';
import { DashChiefEventsComponent } from './dash-chief/events/dash-chief-events.component';
import { DashChiefTasksComponent } from './dash-chief/tasks/dash-chief-tasks.component';
import { DashChiefMealsComponent } from './dash-chief/meals/dash-chief-meals.component';
import { DashTeacherEventsComponent } from './dash-teacher/events/dash-teacher-events.component';
import { DashTeacherHometaskComponent } from './dash-teacher/hometask/dash-teacher-hometask.component';
import { DashTeacherScheduleComponent } from './dash-teacher/schedule/dash-teacher-schedule.component';
import { DashTeacherSheetComponent } from './dash-teacher/sheet/dash-teacher-sheet.component';
import { DashTeacherTasksComponent } from './dash-teacher/tasks/dash-teacher-tasks.component';
import {DashAdminConsumersDetailsComponent} from "./dashboard-admin/consumers/details/dash-admin-consumers-details.component";
import {DashAdminConsumersProfileComponent} from "./dashboard-admin/consumers/details/dash-admin-consumers-profile.component";

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: GlobalSettings.ROUTE_DASHBOARD,
                children: [
                    {path: '', component: DashAdminSchoolsComponent, canActivate:[AuthGuard] },
                    {path: GlobalSettings.ROUTE_DASHBOARD_ADMIN_CONSUMERS, component: DashAdminConsumersComponent, canActivate:[AuthGuard]},
                    {path: GlobalSettings.ROUTE_DASHBOARD_ADMIN_CONSUMERS+'/:id', component: DashAdminConsumersDetailsComponent, canActivate:[AuthGuard]},
                    {path: GlobalSettings.ROUTE_DASHBOARD_ADMIN_CONSUMERS+'/:id/profile', component: DashAdminConsumersProfileComponent, canActivate:[AuthGuard]},
                    {path: GlobalSettings.ROUTE_DASHBOARD_ADMIN_SCHOOLS, component: DashAdminSchoolsComponent, canActivate:[AuthGuard]},
                    {path: GlobalSettings.ROUTE_DASHBOARD_ADMIN_SYSTEM, component: DashAdminSystemComponent, canActivate:[AuthGuard]},
                    {path: GlobalSettings.ROUTE_DASHBOARD_ADMIN_REPORTS, component: DashAdminReportsComponent, canActivate:[AuthGuard]},

                    {path: GlobalSettings.ROUTE_DASHBOARD_TEACHER_PROFILE, component: DashTeacherProfileComponent, canActivate:[AuthGuard]},

                    {path: GlobalSettings.ROUTE_DASHBOARD_PARENT_PROFILE, component: DashParentProfileComponent, canActivate:[AuthGuard]},
                    {path: GlobalSettings.ROUTE_DASHBOARD_PARENT_SCHEDULE, component: DashParentScheduleComponent, canActivate:[AuthGuard]},
                    {path: GlobalSettings.ROUTE_DASHBOARD_PARENT_HOMETASK, component: DashParentHometaskComponent, canActivate:[AuthGuard]},
                    {path: GlobalSettings.ROUTE_DASHBOARD_PARENT_SHEET, component: DashParentSheetComponent, canActivate:[AuthGuard]},
                    {path: GlobalSettings.ROUTE_DASHBOARD_PARENT_EVENTS, component: DashParentEventsComponent, canActivate:[AuthGuard]},
                    {path: GlobalSettings.ROUTE_DASHBOARD_PARENT_TASKS, component: DashParentTasksComponent, canActivate:[AuthGuard]},

                    {path: GlobalSettings.ROUTE_DASHBOARD_CHIEF_PROFILE, component: DashChiefProfileComponent, canActivate:[AuthGuard]},
                    {path: GlobalSettings.ROUTE_DASHBOARD_CHIEF_PLAN, component: DashChiefPlanComponent, canActivate:[AuthGuard]},
                    {path: GlobalSettings.ROUTE_DASHBOARD_CHIEF_SCHEDULE, component: DashChiefScheduleComponent, canActivate:[AuthGuard]},
                    {path: GlobalSettings.ROUTE_DASHBOARD_CHIEF_COURSES, component: DashChiefCoursesComponent, canActivate:[AuthGuard]},
                    {path: GlobalSettings.ROUTE_DASHBOARD_CHIEF_TEACHERS, component: DashChiefTeachersComponent, canActivate:[AuthGuard]},
                    {path: GlobalSettings.ROUTE_DASHBOARD_CHIEF_STUDENTS, component: DashChiefStudentsComponent, canActivate:[AuthGuard]},
                    {path: GlobalSettings.ROUTE_DASHBOARD_CHIEF_PARENTS, component: DashChiefParentsComponent, canActivate:[AuthGuard]},
                    {path: GlobalSettings.ROUTE_DASHBOARD_CHIEF_EVENTS, component: DashChiefEventsComponent, canActivate:[AuthGuard]},
                    {path: GlobalSettings.ROUTE_DASHBOARD_CHIEF_TASKS, component: DashChiefTasksComponent, canActivate:[AuthGuard]},
                    {path: GlobalSettings.ROUTE_DASHBOARD_CHIEF_MEALS, component: DashChiefMealsComponent, canActivate:[AuthGuard]},

                    {path: GlobalSettings.ROUTE_DASHBOARD_TEACHER_PROFILE, component: DashTeacherProfileComponent, canActivate:[AuthGuard]},
                    {path: GlobalSettings.ROUTE_DASHBOARD_TEACHER_EVENTS, component: DashTeacherEventsComponent, canActivate:[AuthGuard]},
                    {path: GlobalSettings.ROUTE_DASHBOARD_TEACHER_HOMETASK, component: DashTeacherHometaskComponent, canActivate:[AuthGuard]},
                    {path: GlobalSettings.ROUTE_DASHBOARD_TEACHER_SCHEDULE, component: DashTeacherScheduleComponent, canActivate:[AuthGuard]},
                    {path: GlobalSettings.ROUTE_DASHBOARD_TEACHER_SHEET, component: DashTeacherSheetComponent, canActivate:[AuthGuard]},
                    {path: GlobalSettings.ROUTE_DASHBOARD_TEACHER_TASKS, component: DashTeacherTasksComponent, canActivate:[AuthGuard]},

                    {path: '**', redirectTo: '/'}
                ]
            }
        ])
    ],
    exports: [RouterModule]
})
export class DashboardRoutingModule { }
