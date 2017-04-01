import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from '../../shared/index';
import {EventsComponent} from "./events.component";

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: 'network/events', component: EventsComponent, canActivate: [AuthGuard] }
        ])
    ],
    exports: [RouterModule]
})
export class NetworkEventsRoutingModule { }
