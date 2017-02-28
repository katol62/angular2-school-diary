import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomToolbarComponent } from './custom.toolbar.component';

@NgModule({
    imports: [CommonModule],
    declarations: [CustomToolbarComponent],
    exports: [CustomToolbarComponent],
    providers: []
})
export class CustomToolbarModule { }
