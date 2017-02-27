import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './index';

export const loginPath = 'login';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: loginPath, component: LoginComponent }
        ])
    ],
    exports: [RouterModule]
})
export class LoginRoutingModule { }
