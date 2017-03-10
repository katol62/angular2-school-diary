import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SchoolsComponent} from "./schools.component";

@NgModule({
    imports: [CommonModule],
    declarations: [SchoolsComponent],
    exports: [SchoolsComponent],
    providers: []
})
export class SchoolsModule { }
