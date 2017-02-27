import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule, PasswordModule, ButtonModule } from 'primeng/primeng';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        InputTextModule,
        PasswordModule,
        ButtonModule,
        LoginRoutingModule,
        SharedModule
    ],
    declarations: [LoginComponent],
    exports: [LoginComponent]
})
export class LoginModule {
}
