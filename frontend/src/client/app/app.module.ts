import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { GlobalEventsManager } from './shared/index';

import { AboutModule } from './about/about.module';
import { HomeModule } from './home/home.module';
import { ContactsModule } from './contacts/contacts.module';
import { IntroModule } from './intro/intro.module';
import { LoginModule } from './login/login.module';
import { SharedModule } from './shared/shared.module';
import { CustomToolbarModule } from './shared/toolbar/custom.toolbar.module';
import { FooterModule } from './shared/footer/footer.module';
import { DashboardModule } from './dashboard/dashboard.module';
// used to create fake backend
import { fakeBackendProvider } from './shared/fakebuckup/index';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';
import {NetworkModule} from "./network/network.module";
import {NewsModule} from "./network/news/news.module";
import {EventsSidebarModule} from "./network/events-side/events.side.module";
import {DataService} from "./shared/data/data-service";
import {EventsModule} from "./network/events/events.module";
import {FeedModule} from "./network/feed/feed.module";
import {FriendsModule} from "./network/friends/friends.module";


@NgModule({
  imports: [BrowserModule,
    HttpModule,
    AppRoutingModule,
    IntroModule, LoginModule,
    AboutModule, HomeModule,
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
      SharedModule.forRoot()],
  declarations: [AppComponent],
  providers: [
    {
      provide: APP_BASE_HREF,
      useValue: '<%= APP_BASE %>',
    },
    GlobalEventsManager,
    // providers used to create fake backend
      DataService,
    fakeBackendProvider,
    MockBackend,
    BaseRequestOptions
  ],
  bootstrap: [AppComponent]

})
export class AppModule { }
