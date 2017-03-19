import {Component} from '@angular/core';
import {Location} from '@angular/common';
import {Router, ActivatedRoute} from '@angular/router';
import {GlobalEventsManager, AuthService} from '../index';
import {User} from "../models/user";
import {UserService} from "../services/user.service";

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
    showToolBar:boolean = true;
    isLoggedIn:boolean = false;

    tabs:any[] = [
        {id: 'home', title: 'Домашняя', link: '/', hide: false},
        {id: 'about', title: 'О нас', link: '/about', hide: false},
        {id: 'contacts', title: 'Контакты', link: '/contacts', hide: false},
        {id: 'network', title: 'Моя сеть', link: '/network', hide: true},
        {id: 'dashboard', title: 'Панель управления', link: '/dashboard', hide: true}
    ];
    selectedTab:string = 'home';

    currentUser:User = new User();

    constructor(public router:Router,
                public authService:AuthService,
                private activatedRoute:ActivatedRoute,
                private userService:UserService,
                private location:Location,
                private globalEventsManager:GlobalEventsManager) {

        console.log(location.prepareExternalUrl(location.path()));
        let tab:any = this.getTabByPath(location.prepareExternalUrl(location.path()));
        this.selectedTab = tab.id;

        this.globalEventsManager.showToolBarEmitter.subscribe((mode)=> {
            // mode will be null the first time it is created, so you need to igonore it when null

            this.currentUser = this.userService.getCurrentUser();

            if (mode !== null) {
                this.showToolBar = mode;
            }
        });
        this.globalEventsManager.isLoggedInEmitter.subscribe((mode)=> {
            // mode will be null the first time it is created, so you need to igonore it when null
            if (mode !== null) {
                this.isLoggedIn = mode;
                this.currentUser = this.userService.getCurrentUser();
            }
        });

        this.isLoggedIn = this.authService.isLoggedIn();

    }

    getTabByPath(pathname:string) {
        for (let i=0; i<this.tabs.length; i++) {
            if (this.tabs[i].link == pathname) {
                return this.tabs[i];
            }
        }
        return  this.tabs[0];
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

    goTab(tab) {
        this.selectedTab = tab.id;
        this.router.navigateByUrl(tab.link);
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

    profile() {
        console.log('profile');
        this.router.navigateByUrl('/dashboard');
    }

}

