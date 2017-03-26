import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ScheduleComponent} from "./schedule.component";

@NgModule({
    imports: [CommonModule],
    declarations: [ScheduleComponent],
    exports: [ScheduleComponent],
    providers: []
})
export class ScheduleModule { }
