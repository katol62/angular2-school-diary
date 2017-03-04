import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from './index';

export const registerPath = 'register';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: registerPath, component: RegisterComponent }
        ])
    ],
    exports: [RouterModule]
})
export class RegisterRoutingModule { }
