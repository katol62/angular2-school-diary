import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FriendsComponent } from './friends.component';
import {NetworkSidemenuModule} from "../networksidemenu/network-sidemenu.module";
import {NetworkRightbarModule} from "../networkrightbar/network-rightbar.module";
import {NetworkFriendsRoutingModule} from "./friends-routing.module";

@NgModule({
    imports: [CommonModule, NetworkSidemenuModule, NetworkRightbarModule, NetworkFriendsRoutingModule],
    declarations: [FriendsComponent],
    exports: [FriendsComponent],
    providers: []
})
export class FriendsModule { }
