import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from '../../shared/index';
import {FeedComponent} from "./feed.component";

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: 'network/feed', component: FeedComponent, canActivate: [AuthGuard] }
        ])
    ],
    exports: [RouterModule]
})
export class NetworkFeedRoutingModule { }
