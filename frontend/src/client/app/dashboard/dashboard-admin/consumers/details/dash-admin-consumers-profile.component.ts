import { Component, OnInit, ElementRef, Input, NgModule } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Profile, Address, Country} from "../../../../shared/models/user";
import {GlobalSettings} from "../../../../shared/data/global-settings";
import {GlobalEventsManager} from "../../../../shared/events/global-events.manager";
import {ProfileService,LocationService} from "../../../../shared/services/index";
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {SelectItem} from 'primeng/primeng';

import * as moment from 'moment';


@Component({
    moduleId: module.id,
    selector: 'sd-dashboard-admin-consumers-profile',
    templateUrl: 'dash-admin-consumers-profile.component.html',
    styleUrls: ['dash-admin-consumers-profile.component.css'],
})


export class DashAdminConsumersProfileComponent implements OnInit {

    id: number;
    private sub: any;
    roles:any[] = [];

    countries:any[];
    filteredCountries: any[];

    cities:any[] = [];
    filteredCities: any[];

    ru:any;

    updateResult = '';

    profile:FormGroup;

    profileToSave:any;

    public genders = [
        { value: "0", display: "Женский" },
        { value: "1", display: "Мужской" }
    ];

    selectedPanel:string = GlobalSettings.ROUTE_DASHBOARD_ADMIN_CONSUMERS;
    profileLink:string = GlobalSettings.ROUTE_DASHBOARD+'/'+GlobalSettings.ROUTE_DASHBOARD_ADMIN_CONSUMERS+'/:id/profile';

    constructor(private globalEventsManager:GlobalEventsManager, private profileService:ProfileService, private route: ActivatedRoute, private router:Router, private locationService:LocationService) {

    }

    ngOnInit() {

        this.ru = {
            firstDayOfWeek: 0,
            dayNames: ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"],
            dayNamesShort: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
            dayNamesMin: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
            monthNames: [ "Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь" ],
            monthNamesShort: [ "Янв", "Фев", "Мар", "Апр", "Май", "Июн","Июл", "Авг", "Сен", "Окт", "Ноя", "Дек" ]
        };

        this.resetProfile();

        this.globalEventsManager.selectedMenuItem(GlobalSettings.ROUTE_DASHBOARD);
        this.initRequest();

        this.locationService.getAllCities().subscribe(
            data => {
                this.cities = this.completeSelect(data);
            },
            error => {
                debugger;
            }
        );
        this.locationService.getAllCountries().subscribe(
            data => {
                this.countries = this.completeSelect(data);
            },
            error => {

            }
        );
    }

    resetProfile() {
        let emailRegex = '^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$';
        let phonePatterm = '[0-9]+';
        this.profile = new FormGroup({
            id: new FormControl('-1'),
            userId: new FormControl(''),
            firstName: new FormControl('', [Validators.required, Validators.minLength(2)]),
            middleName: new FormControl('', [Validators.required, Validators.minLength(2)]),
            lastName: new FormControl('', [Validators.required, Validators.minLength(2)]),
            email: new FormControl('', [Validators.required, Validators.pattern(emailRegex)]),
            gender: new FormControl('', [Validators.required]),
            phone: new FormControl('', [Validators.pattern(phonePatterm)]),
            birthDate: new FormControl(''),
            address: new FormGroup({
                id: new FormControl('-1'),
                zip: new FormControl(''),
                country: new FormGroup({
                    id: new FormControl(''),
                    name: new FormControl(''),
                }),
                city: new FormGroup({
                    id: new FormControl(''),
                    name: new FormControl(''),
                }),
                addressLine: new FormControl(''),
                comment: new FormControl('')
            })
        });

    }

    completeSelect(data:any[]) {
        let tmpArray:any[] = [];
        for (let entry of data) {
            tmpArray.push({label:entry.name, value:entry});
        }
        return tmpArray;
    }

    initRequest() {
        this.sub = this.route.params.subscribe(params => {
            this.id = +params['id']; // (+) converts string 'id' to a number

            this.profile.controls['userId'].setValue(this.id);

            this.profileService.getByUserId(this.id)
                .subscribe(
                    data => {
                        this.afterProfileGet(data);
                    },
                    error => {
                        this.afterProfileGet(null)
                    }
                );
        });
    }

    afterProfileGet(data:any) {
        if (data === null) {
            console.log('users null')
        } else {
            this.locationService.getAddress(data.address.id)
                .subscribe(
                    data => {
                        this.afterAddressGet(data);
                    },
                    error => {
                        this.afterAddressGet(null);
                    }
                );
            this.profile.patchValue(data);
        }
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    create(profileObj:any) {

        let city:City = profileObj["address"]["city"] ? profileObj["address"]["city"]["id"] : null;
        let country:Country = profileObj["address"]["country"] ? profileObj["address"]["country"]["id"] : null;
        let birthdate:string = profileObj.birthDate ? moment(profileObj.birthDate).format('DD-MM-YYYY') : null;

        this.profileToSave = profileObj;
        this.profileToSave.birthDate = birthdate;

        this.profileToSave.address.city = city;
        this.profileToSave.address.country = country;

        if (this.profileToSave.address.id > 0) {
            this.locationService.updateAddress(this.profileToSave.address)
                .subscribe(
                    data => {
                        this.afterAddressUpdate(data);
                    },
                    error => {
                        this.afterAddressUpdate(null)
                    }
                );
        } else {
            this.locationService.createAddress(this.profileToSave.address)
                .subscribe(
                    data => {
                        this.afterAddressCreate(data);
                    },
                    error => {
                        this.afterAddressCreate(null)
                    }
                );
        }
        
    }

    update(profile:Profile) {
        debugger;
        let city:City = profileObj["address"]["city"] ? profileObj["address"]["city"]["id"] : null;
        let country:Country = profileObj["address"]["country"] ? profileObj["address"]["country"]["id"] : null;
        let birthdate:string = profileObj.birthDate ? moment(profileObj.birthDate).format('DD-MM-YYYY') : null;

        this.profileToSave = profileObj;
        this.profileToSave.birthDate = birthdate;

        this.profileToSave.address.city = city;
        this.profileToSave.address.country = country;

        if (this.profileToSave.address.id > 0) {
            this.locationService.updateAddress(profile.address)
                .subscribe(
                    data => {
                        this.afterAddressUpdate(data);
                    },
                    error => {
                        this.afterAddressUpdate(null)
                    }
                );
        }

    }

    afterAddressGet(data:any) {
        debugger;
        if (data == null) {
            this.updateResult = 'Ошибка получения адреса';
            console.log('address create fail');
            this.resetProfile();
        } else {
            if (data.city && data.city.id && data.city.name) {
                data.city.id = data.city;
            }
            if (data.country && data.country.id && data.country.name) {
                data.country.id = data.country;
            }

            this.profile.address.patchValue(data);
            debugger;
        }
    }

    afterAddressCreate(data:any) {
        if (data === null) {
            this.updateResult = 'Ошибка создания адреса';
            console.log('address create fail');
            this.resetProfile();
        } else {
            console.log('create success');
            this.profileToSave.address = data;
            this.profileService.create(this.profileToSave)
                .subscribe(
                    data => {
                        this.afterProfileCreate(data);
                    },
                    error => {
                        this.afterProfileCreate(null)
                    }
                );

        }
    }

    afterAddressUpdate(data:any) {
        if (data === null) {
            this.updateResult = 'Ошибка редактирования адреса';
            console.log('address update fail');
            this.resetProfile();
        } else {
            console.log('address update success');
            this.profileToSave.address = data;
            this.profileService.create(this.profileToSave)
                .subscribe(
                    data => {
                        this.afterProfileUpdate(data);
                    },
                    error => {
                        this.afterProfileUpdate(null)
                    }
                );

        }
    }

    afterProfileCreate(data:any) {
        debugger;
        if (data === null) {
            this.updateResult = 'Ошибка создания профайла';
            console.log('create fail')
        } else {
            console.log('create success');
            this.updateResult = 'Профайл создан';

        }
    }

    afterProfileUpdate(data:any) {
        if (data === null) {
            this.updateResult = 'Ошибка редактирования профайла';
            console.log('update fail');
        } else {
            console.log('update success');
            this.profileToSave = data;
        }
    }

    back() {
        this.router.navigateByUrl(GlobalSettings.ROUTE_DASHBOARD+'/'+GlobalSettings.ROUTE_DASHBOARD_ADMIN_CONSUMERS+'/'+this.id);
    }

    onSubmit({ value, valid }: { value: Profile, valid: boolean }) {
        console.log(value, valid);
        if (valid) {
            this.updateResult = '';
            if (value.id.toString() == '-1') { //create
                value.id = null;
                this.create(value);
            } else {
                this.update(value);
            }
        } else {
            this.updateResult = 'Ошибка сохранения';
        }
    }

}
