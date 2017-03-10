import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ConsumersComponent} from "./consumers.component";

@NgModule({
    imports: [CommonModule],
    declarations: [ConsumersComponent],
    exports: [ConsumersComponent],
    providers: []
})
export class ConsumersModule { }
