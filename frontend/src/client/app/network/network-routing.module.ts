import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NetworkComponent } from './network.component';
import { AuthGuard } from '../shared/index';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: 'network', component: NetworkComponent, canActivate: [AuthGuard] }
        ])
    ],
    exports: [RouterModule]
})
export class NetworkRoutingModule { }
