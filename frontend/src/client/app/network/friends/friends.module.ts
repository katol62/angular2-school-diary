import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FriendsComponent } from './friends.component';

@NgModule({
    imports: [CommonModule],
    declarations: [FriendsComponent],
    exports: [FriendsComponent],
    providers: []
})
export class FriendsModule { }
