import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SystemComponent} from "./system.component";

@NgModule({
    imports: [CommonModule],
    declarations: [SystemComponent],
    exports: [SystemComponent],
    providers: []
})
export class SystemModule { }
