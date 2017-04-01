import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from '../../shared/index';
import {FriendsComponent} from "./friends.component";

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: 'network/friends', component: FriendsComponent, canActivate: [AuthGuard] }
        ])
    ],
    exports: [RouterModule]
})
export class NetworkFriendsRoutingModule { }
