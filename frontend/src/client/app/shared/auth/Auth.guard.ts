import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {User} from "../models/user";
import { AuthService } from "./Auth.service";
import {GlobalSettings} from "../data/global-settings";
import {UserService} from "../services/user.service";

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router, private authService:AuthService, private userService:UserService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        if (this.authService.isLoggedIn()) {
            if (state.url == '/'+GlobalSettings.ROUTE_DASHBOARD) {
                let user:User = this.userService.getCurrentUser();
                let role:number = user.primeRole;
                if (role == GlobalSettings.ROLE_GLOGAL_ADMIN || role == GlobalSettings.ROLE_LOCAL_ADMIN) {
                    this.router.navigateByUrl(GlobalSettings.ROUTE_DASHBOARD+'/'+GlobalSettings.ROUTE_DASHBOARD_ADMIN_SCHOOLS);
                    return false;
                }
                if (role == GlobalSettings.ROLE_TEACHER) {
                    this.router.navigateByUrl(GlobalSettings.ROUTE_DASHBOARD+'/'+GlobalSettings.ROUTE_DASHBOARD_TEACHER_PROFILE);
                    return false;
                }
                if (role == GlobalSettings.ROLE_PRINCIPAL) {
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

        // not logged in so redirect to login page with the return url
        this.authService.logout();
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
        return false;
    }
}
