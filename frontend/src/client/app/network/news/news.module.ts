import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './news.component';
import { NetworkSidemenuModule } from "../networksidemenu/network-sidemenu.module";
import { NetworkRightbarModule } from "../networkrightbar/network-rightbar.module";
import {NetworkNewsRoutingModule} from "./news-routing.module";

@NgModule({
    imports: [CommonModule, NetworkSidemenuModule, NetworkRightbarModule, NetworkNewsRoutingModule],
    declarations: [NewsComponent],
    exports: [NewsComponent],
    providers: []
})
export class NewsModule { }
