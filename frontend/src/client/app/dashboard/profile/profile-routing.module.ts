import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProfileComponent } from "./profile.component";

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: 'dashboard/profile', component: ProfileComponent }
        ])
    ],
    exports: [RouterModule]
})
export class ProfileRoutingModule { }
