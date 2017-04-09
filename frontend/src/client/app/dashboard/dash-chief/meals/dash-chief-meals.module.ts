import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashboardMenuModule} from "../../menu/dashboard.menu.module";
import {DashChiefMealsComponent} from "./dash-chief-meals.component";

@NgModule({
    imports: [CommonModule, DashboardMenuModule],
    declarations: [DashChiefMealsComponent],
    exports: [DashChiefMealsComponent],
    providers: []
})
export class DashChiefMealsModule { }
