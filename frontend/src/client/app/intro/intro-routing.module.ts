import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {IntroComponent} from "./intro.component";

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', component: IntroComponent }
        ])
    ],
    exports: [RouterModule]
})
export class IntroRoutingModule { }
