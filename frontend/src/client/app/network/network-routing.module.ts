import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NetworkComponent } from './network.component';
import { AuthGuard } from '../shared/index';
import {NewsComponent} from "./news/news.component";
import {EventsComponent} from "./events/events.component";
import {FeedComponent} from "./feed/feed.component";
import {FriendsComponent} from "./friends/friends.component";

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: 'network', redirectTo:'network/news', pathMatch: 'full'},
        ])
    ],
    exports: [RouterModule]
})
export class NetworkRoutingModule { }
