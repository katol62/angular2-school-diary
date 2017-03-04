import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { RegisterRoutingModule, RegisterComponent } from "./index";

@NgModule({
    imports: [
        CommonModule,
        RegisterRoutingModule,
        SharedModule
    ],
    declarations: [RegisterComponent],
    exports: [RegisterComponent]
})
export class RegisterModule {
}
