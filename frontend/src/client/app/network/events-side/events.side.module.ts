import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsSidebarComponent } from './events.side.component';

@NgModule({
    imports: [CommonModule],
    declarations: [EventsSidebarComponent],
    exports: [EventsSidebarComponent],
    providers: []
})
export class EventsSidebarModule { }
