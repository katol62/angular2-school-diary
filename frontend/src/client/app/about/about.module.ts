import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { AboutRoutingModule } from './about-routing.module';
import {BreadcrumbsModule} from "../shared/breadcrumbs/breadcrumbs.module";

@NgModule({
  imports: [CommonModule, AboutRoutingModule, BreadcrumbsModule],
  declarations: [AboutComponent],
  exports: [AboutComponent]
})
export class AboutModule { }
