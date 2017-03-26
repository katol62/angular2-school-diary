import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class GlobalEventsManager {

    private _showToolbar: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(null);
    public showToolBarEmitter: Observable<boolean> = this._showToolbar.asObservable();

    private _isLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(null);
    public isLoggedInEmitter: Observable<boolean> = this._isLoggedIn.asObservable();

    private _selectedMenuItem: BehaviorSubject<string> = new BehaviorSubject<string>(null);
    public setSelectedMenuItemEmitter: Observable<string> = this._selectedMenuItem.asObservable();

    constructor() {}

    showToolBar(ifShow: boolean) {
        this._showToolbar.next(ifShow);
    }

    isLoggedIn(ifLogged: boolean) {
        this._isLoggedIn.next(ifLogged);
    }

    selectedMenuItem(tab:string) {
        this._selectedMenuItem.next(tab)
    }

}
