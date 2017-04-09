import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {User} from "../models/user";
import { AuthService } from "./Auth.service";
import {GlobalSettings} from "../data/global-settings";

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router, private authService:AuthService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        if (this.authService.isLoggedIn()) {
            if (state.url == '/'+GlobalSettings.ROUTE_DASHBOARD) {
                let user:User = this.authService.getLoggedInUser();
                let role:string = user.type;
                if (role == GlobalSettings.ROLE_ADMIN) {
                    this.router.navigateByUrl(GlobalSettings.ROUTE_DASHBOARD+'/'+GlobalSettings.ROUTE_DASHBOARD_ADMIN_SCHOOLS);
                    return false;
                }
                if (role == GlobalSettings.ROLE_TEACHER) {
                    this.router.navigateByUrl(GlobalSettings.ROUTE_DASHBOARD+'/'+GlobalSettings.ROUTE_DASHBOARD_TEACHER_PROFILE);
                    return false;
                }
                if (role == GlobalSettings.ROLE_CHIEF) {
                    this.router.navigateByUrl(GlobalSettings.ROUTE_DASHBOARD+'/'+GlobalSettings.ROUTE_DASHBOARD_CHIEF_PROFILE);
                    return false;
                }
                if (role == GlobalSettings.ROLE_PARENT) {
                    this.router.navigateByUrl(GlobalSettings.ROUTE_DASHBOARD+'/'+GlobalSettings.ROUTE_DASHBOARD_PARENT_PROFILE);
                    return false;
                }
            } else {
                return true;
            }
        }

        // let role = route.data && route.data['role'] ? route.data['role'] : null;
        // if (role ) {
        //     if (this.authService.isLoggedInWithRole(role)) {
        //         debugger;
        //         if (state.url == '/'+GlobalSettings.ROUTE_DASHBOARD) {
        //             if (role == GlobalSettings.ROLE_ADMIN) {
        //                 this.router.navigateByUrl(GlobalSettings.ROUTE_DASHBOARD+'/'+GlobalSettings.ROUTE_DASHBOARD_ADMIN_SCHOOLS);
        //                 return false;
        //             }
        //             if (role == GlobalSettings.ROLE_TEACHER) {
        //                 this.router.navigateByUrl(GlobalSettings.ROUTE_DASHBOARD+'/'+GlobalSettings.ROUTE_DASHBOARD_TEACHER_PROFILE);
        //                 return false;
        //             }
        //             if (role == GlobalSettings.ROLE_PARENT) {
        //                 this.router.navigateByUrl(GlobalSettings.ROUTE_DASHBOARD+'/'+GlobalSettings.ROUTE_DASHBOARD_PARENT_PROFILE);
        //                 return false;
        //             }
        //
        //         } else {
        //             return true;
        //         }
        //     }
        // } else {
        //     if (this.authService.isLoggedIn()) {
        //         return true;
        //     }
        // }

        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
        return false;
    }
}
