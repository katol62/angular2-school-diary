import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import { SharedModule } from '../shared/shared.module';
import {FooterModule} from "../shared/footer/footer.module";

@NgModule({
    imports: [
        CommonModule,
        LoginRoutingModule,
        SharedModule,
        FooterModule
    ],
    declarations: [LoginComponent],
    exports: [LoginComponent]
})
export class LoginModule {
}
