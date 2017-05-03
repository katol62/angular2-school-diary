import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Account, User, GlobalEventsManager, AuthService } from '../shared/index';
import {UserService} from "../shared/services/user.service";

/**
 * This class represents the lazy loaded LoginComponent.
 */
@Component({
    moduleId: module.id,
    selector: 'sd-login',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css'],
})

export class LoginComponent implements OnInit {

    model = new User();
    loading = false;
    returnUrl: string;

    authSend = false;
    authFailed = false;

    ngOnInit() {
        // reset login status

        //this.authService.logout();

        this.globalEventsManager.showToolBar(false);

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    constructor(public router:Router,
                public authService:AuthService,
                private route: ActivatedRoute,
                private userService:UserService,
                private globalEventsManager: GlobalEventsManager ) {
    }

    login() {
        this.authSend = true;
        this.authService.login(this.model.email, this.model.password)
            .subscribe(
                data => {
                    this.afterSignIn(data);
                },
                error => {
                    this.afterSignIn(null)
                }
            );
    }

    afterSignIn(auth:any) {
        if (auth === null) {
            this.authFailed = true;
            this.authService.logout();
        } else {
            this.authService.updateToken(auth);

            this.userService.getMe()
                .subscribe(
                    data => {
                        this.afterUserGet(data);
                    },
                    error => {
                        this.afterUserGet(null)
                    }
                );
        }
    }

    afterUserGet(user:any) {
        if (user === null) {
            this.authFailed = true;
            console.log('user null')
        } else {
            this.userService.setCurrentUser(user);
            this.globalEventsManager.isLoggedIn(true);
            this.router.navigateByUrl(this.returnUrl);
        }
    }
}
