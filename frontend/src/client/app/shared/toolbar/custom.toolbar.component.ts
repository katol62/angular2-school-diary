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
        {id: '', title: 'Домашняя', link: '', hide: false},
        {id: 'about', title: 'О нас', link: 'about', hide: false},
        {id: 'contacts', title: 'Контакты', link: 'contacts', hide: false},
        {id: 'network', title: 'Моя сеть', link: 'network', hide: true},
        {id: 'dashboard', title: 'Панель управления', link: 'dashboard', hide: true}
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
            this.currentUser = this.userService.getCurrentUser();
            if (mode !== null) {
                this.showToolBar = mode;
            }
        });
        this.globalEventsManager.setSelectedMenuItemEmitter.subscribe((mode)=> {
            if (mode !== null) {
                this.selectedTab = mode;
            }
        });

        this.globalEventsManager.isLoggedInEmitter.subscribe((mode)=> {
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
        this.selectedTab = null;
        this.router.navigateByUrl('/login');
    }

    onLogout() {
        this.authService.logout();
        this.globalEventsManager.isLoggedIn(false);
        this.globalEventsManager.showToolBar(true);
        this.router.navigateByUrl('/');
    }

    goTab(tab:any) {
        this.selectedTab = tab.id;
        this.router.navigateByUrl('/'+tab.link);
        this.globalEventsManager.selectedMenuItem(tab.link);
    }

    profile() {
        console.log('profile');
        this.router.navigateByUrl('/dashboard');
        this.globalEventsManager.selectedMenuItem('dashboard');
    }

    goHome() {
        this.router.navigateByUrl('/');
        this.globalEventsManager.selectedMenuItem('');
    }


}

