import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { GlobalEventsManager } from './shared/index';

import { AboutModule } from './about/about.module';
import { ContactsModule } from './contacts/contacts.module';
import { IntroModule } from './intro/intro.module';
import { LoginModule } from './login/login.module';
import { SharedModule } from './shared/shared.module';
import { CustomToolbarModule } from './shared/toolbar/custom.toolbar.module';
import { FooterModule } from './shared/footer/footer.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { NetworkModule } from './network/network.module';
import { NewsModule } from './network/news/news.module';
import { EventsSidebarModule } from './network/events-side/events.side.module';
import { DataService } from './shared/data/data-service';
import { EventsModule } from './network/events/events.module';
import { FeedModule } from './network/feed/feed.module';
import { FriendsModule } from './network/friends/friends.module';
import { RegisterModule } from "./register/register.module";
import { UserService,AlertService}  from './shared/index';
import {BreadcrumbsModule} from "./shared/breadcrumbs/breadcrumbs.module";
import {HlsPlayerModule} from "./shared/hls-video/hls-player.module";
import {ProfileService} from "./shared/services/profile.service";
import {LocationService} from "./shared/services/location.service";
import { Ng2BootstrapModule } from 'ngx-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [BrowserModule,
      HttpModule,
      AppRoutingModule,
      IntroModule, LoginModule,
      AboutModule, 
      CustomToolbarModule,
      FooterModule,
      ContactsModule,
      DashboardModule,
      NetworkModule,
      NewsModule,
      EventsSidebarModule,
      EventsModule,
      FeedModule,
      FriendsModule,
      RegisterModule,
      HlsPlayerModule,
      BrowserAnimationsModule,
      HttpModule,
      BreadcrumbsModule,
      Ng2BootstrapModule.forRoot(),
      SharedModule.forRoot()],
  declarations: [AppComponent],
  providers: [
    {
      provide: APP_BASE_HREF,
      useValue: '<%= APP_BASE %>',
    },
    GlobalEventsManager,
      DataService,
      UserService,
      ProfileService,
      LocationService,
      AlertService
  ],
  bootstrap: [AppComponent]

})
export class AppModule { }
