import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomToolbarComponent } from './custom.toolbar.component';
import {ToolbarModule, ButtonModule} from "primeng/primeng";

@NgModule({
    imports: [CommonModule, ToolbarModule, ButtonModule],
    declarations: [CustomToolbarComponent],
    exports: [CustomToolbarComponent],
    providers: []
})
export class CustomToolbarModule { }
