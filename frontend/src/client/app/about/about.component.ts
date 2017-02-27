import { Component } from '@angular/core';
import { Router } from '@angular/router';

/**
 * This class represents the lazy loaded AboutComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-about',
  templateUrl: 'about.component.html',
  styleUrls: ['about.component.css']
})
export class AboutComponent {

  constructor(public router:Router) {}

  goHome() {
    this.router.navigateByUrl('/');
  }

}
