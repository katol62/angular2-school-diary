import { Component, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
    moduleId: module.id,
    selector: 'sd-contacts',
    templateUrl: 'contacts.component.html',
    styleUrls: ['contacts.component.css'],
})

export class ContactsComponent implements OnInit {

    title:string = 'Контакты';

    constructor(public router:Router) {}

    ngOnInit() {
        console.log('init');
    }

    goHome() {
        this.router.navigateByUrl('/');
    }
}
