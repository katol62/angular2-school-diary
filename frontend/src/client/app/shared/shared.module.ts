import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';
import { NameListService } from './name-list/name-list.service';
import { AuthService, AuthGuard } from './index';
import {FooterModule} from "./footer/footer.module";
import {HlsPlayerModule} from "./hls-video/hls-player.module";

/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */

@NgModule({
  imports: [CommonModule, RouterModule, FooterModule, HlsPlayerModule],
  declarations: [NavbarComponent],
  exports: [NavbarComponent,
    CommonModule, FormsModule, RouterModule]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        NameListService,
        // Auth
        <any>AuthGuard,
        <any>AuthService,
      ]
    };
  }
}
