import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Account, User, GlobalEventsManager, AuthService } from '../shared/index';

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

        this.authService.logout();

        this.globalEventsManager.showToolBar(false);

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    constructor(public router:Router,
                public authService:AuthService,
                private route: ActivatedRoute,
                private globalEventsManager: GlobalEventsManager ) {
    }

    login() {

        this.authSend = true;

        // this.authService.login(this.model.username, this.model.password).then((data)=>{
        //     debugger;
        //     this.afterSignIn(data)
        // });
        
        this.authService.login(this.model.username, this.model.password)
            .subscribe(
                data => {
                    this.afterSignIn(data);
                    //this.router.navigate([this.returnUrl]);
                },
                error => {
                    this.afterSignIn(null)
                }
            );
    }

    afterSignIn(user:any) {
        if (user === null) {
            this.authFailed = true;
            this.globalEventsManager.isLoggedIn(false);
        } else {
            this.globalEventsManager.isLoggedIn(true);
            this.router.navigateByUrl('/network');
        }
    }
}
