import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NetworkRoutingModule } from './network-routing.module';
import { NetworkComponent } from './network.component';
import { NewsModule } from './news/news.module';
import { EventsSidebarModule } from './events-side/events.side.module';
import { EventsModule } from './events/events.module';
import { FeedModule } from './feed/feed.module';
import { FriendsModule } from './friends/friends.module';
import {BreadcrumbsModule} from "../shared/breadcrumbs/breadcrumbs.module";

@NgModule({
    imports: [CommonModule,
        NetworkRoutingModule,
        NewsModule,
        EventsSidebarModule,
        EventsModule,
        FeedModule,
        BreadcrumbsModule,
        FriendsModule
    ],
    declarations: [NetworkComponent],
    exports: [NetworkComponent],
    providers: []
})
export class NetworkModule { }
