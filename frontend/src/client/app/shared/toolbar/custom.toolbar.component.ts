import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GlobalEventsManager, AuthService } from '../index';

/**
 * This class represents the toolbar component.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-toolbar',
  templateUrl: 'custom.toolbar.component.html',
  styleUrls: ['custom.toolbar.component.css']
})
export class CustomToolbarComponent {
  showToolBar: boolean = true;
  isLoggedIn: boolean = false;

  constructor(public router:Router,
              public authService:AuthService,
              private globalEventsManager: GlobalEventsManager) {
    this.globalEventsManager.showToolBarEmitter.subscribe((mode)=> {
      // mode will be null the first time it is created, so you need to igonore it when null
      if (mode !== null) {
        this.showToolBar = mode;
      }
    });
    this.globalEventsManager.isLoggedInEmitter.subscribe((mode)=> {
      // mode will be null the first time it is created, so you need to igonore it when null
      if (mode !== null) {
        this.isLoggedIn = mode;
      }
    });

    this.isLoggedIn = this.authService.isLoggedIn();

  }

  onLogin() {
    this.router.navigateByUrl('/login');
  }

  onLogout() {
    this.authService.logout();
    this.globalEventsManager.isLoggedIn(false);
    this.globalEventsManager.showToolBar(true);
    this.router.navigateByUrl('/');
  }

  goHome() {
    this.router.navigateByUrl('/');
  }

  goAbout() {
    this.router.navigateByUrl('/about');
  }

  goContact() {
    this.router.navigateByUrl('/contacts');
  }

  goDashboard() {
    this.router.navigateByUrl('/dashboard');
  }

  goNetwork() {
    this.router.navigateByUrl('/network');
  }

  goDashboard() {
    this.router.navigateByUrl('/dashboard');
  }

  profile() {
    console.log('profile');
  }

}

