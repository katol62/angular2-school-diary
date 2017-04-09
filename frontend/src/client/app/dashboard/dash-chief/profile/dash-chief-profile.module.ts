import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashboardMenuModule} from "../../menu/dashboard.menu.module";
import {DashChiefProfileComponent} from "./dash-chief-profile.component";

@NgModule({
    imports: [CommonModule, DashboardMenuModule],
    declarations: [DashChiefProfileComponent],
    exports: [DashChiefProfileComponent],
    providers: []
})
export class DashChiefProfileModule { }
