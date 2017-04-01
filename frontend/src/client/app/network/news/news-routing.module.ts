import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from '../../shared/index';
import {NewsComponent} from "./news.component";

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: 'network/news', component: NewsComponent, canActivate: [AuthGuard] }
        ])
    ],
    exports: [RouterModule]
})
export class NetworkNewsRoutingModule { }
