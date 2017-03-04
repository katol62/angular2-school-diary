import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Account, User, GlobalEventsManager, AuthService, UserService } from '../shared/index';

/**
 * This class represents the lazy loaded LoginComponent.
 */
@Component({
    moduleId: module.id,
    selector: 'sd-register',
    templateUrl: 'register.component.html',
    styleUrls: ['register.component.css'],
})

export class RegisterComponent implements OnInit {

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

    register() {
        this.loading = true;
        // this.userService.create(this.model)
        //     .subscribe(
        //         data => {
        //             this.alertService.success('Registration successful', true);
        //             this.router.navigate(['/login']);
        //         },
        //         error => {
        //             this.alertService.error(error);
        //             this.loading = false;
        //         });
    }

    afterSignIn(user:Account) {
        this.router.navigateByUrl('/');
    }
}
