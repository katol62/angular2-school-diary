import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedComponent } from './feed.component';
import {NetworkFeedRoutingModule} from "./feed-routing.module";
import {NetworkSidemenuModule} from "../networksidemenu/network-sidemenu.module";
import {NetworkRightbarModule} from "../networkrightbar/network-rightbar.module";

@NgModule({
    imports: [CommonModule, NetworkFeedRoutingModule, NetworkSidemenuModule, NetworkRightbarModule],
    declarations: [FeedComponent],
    exports: [FeedComponent],
    providers: []
})
export class FeedModule { }
