import { Component, OnInit, ElementRef, Input, NgModule } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {User} from "../../../../shared/models/user";
import {GlobalSettings} from "../../../../shared/data/global-settings";
import {GlobalEventsManager} from "../../../../shared/events/global-events.manager";
import {UserService} from "../../../../shared/services/user.service";

@Component({
    moduleId: module.id,
    selector: 'sd-dashboard-admin-consumers-details',
    templateUrl: 'dash-admin-consumers-details.component.html',
    styleUrls: ['dash-admin-consumers-details.component.css'],
})


export class DashAdminConsumersDetailsComponent implements OnInit {

    id: number;
    private sub: any;
    roles:any[] = [];

    updateResult:string = '';

    model:User = new User();
    selectedPanel:string = GlobalSettings.ROUTE_DASHBOARD_ADMIN_CONSUMERS;
    profileLink:string = GlobalSettings.ROUTE_DASHBOARD+'/'+GlobalSettings.ROUTE_DASHBOARD_ADMIN_CONSUMERS+'/:id/profile';

    constructor(private globalEventsManager:GlobalEventsManager, private userService:UserService, private route: ActivatedRoute, private router:Router) { }

    ngOnInit() {
        this.globalEventsManager.selectedMenuItem(GlobalSettings.ROUTE_DASHBOARD);
        this.roles = GlobalSettings.ROLES;
        this.initRequest();
    }

    initRequest() {
        this.sub = this.route.params.subscribe(params => {
            this.id = +params['id']; // (+) converts string 'id' to a number
            this.userService.getById(this.id)
                .subscribe(
                    data => {
                        this.afterUserGet(data);
                    },
                    error => {
                        this.afterUserGet(null)
                    }
                );
        });
    }

    afterUserGet(data:any) {
        if (data === null) {
            console.log('users null')
        } else {
            this.model = data;
        }
    }

    getRole(user:User) {
        return GlobalSettings.ROLES[user.primeRole];
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    update() {
        this.userService.update(this.model)
            .subscribe(
                data => {
                    this.afterUserUpdate(data);
                },
                error => {
                    this.afterUserUpdate(null)
                }
            );
    }

    afterUserUpdate(data:any) {
        if (data === null) {
            console.log('update fail');
            this.updateResult = 'Ошибка сохранения';
        } else {
            console.log('update success');
            this.updateResult = 'Изменения успешно сохранены';
            this.model = data;
        }
    }

    back() {
        this.router.navigateByUrl(GlobalSettings.ROUTE_DASHBOARD+'/'+GlobalSettings.ROUTE_DASHBOARD_ADMIN_CONSUMERS);
//        this.router.navigate(GlobalSettings.ROUTE_DASHBOARD+'/'+GlobalSettings.ROUTE_DASHBOARD_ADMIN_CONSUMERS);
    }

    updateProfile() {
        debugger;
        let path = GlobalSettings.ROUTE_DASHBOARD+'/'+GlobalSettings.ROUTE_DASHBOARD_ADMIN_CONSUMERS+'/'+this.id+'/profile';
        this.router.navigateByUrl(path);
        //this.router.navigate([this.profileLink, {id: this.id}]);
    }

}
