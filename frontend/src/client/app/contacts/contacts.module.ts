import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactsComponent } from './contacts.component';
import {BreadcrumbsModule} from "../shared/breadcrumbs/breadcrumbs.module";

@NgModule({
    imports: [CommonModule, ContactsRoutingModule, BreadcrumbsModule],
    declarations: [ContactsComponent],
    exports: [ContactsComponent],
    providers: []
})
export class ContactsModule { }
