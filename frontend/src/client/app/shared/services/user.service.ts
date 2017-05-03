import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { User } from '../models/index';
import {AuthService} from "../auth/Auth.service";
import {GlobalSettings} from "../data/global-settings";

@Injectable()
export class UserService {

    private tokenKey:string = GlobalSettings.STORAGE_TOKEN;
    private userKey:string = GlobalSettings.STORAGE_USER;

    constructor(private http: Http, private authService:AuthService) { }

    //current user
    getCurrentUser() {
        if (localStorage.getItem(this.userKey)) {
            let user:any = JSON.parse(localStorage.getItem(this.userKey));
            return user;
        }
        return null;
    }

    setCurrentUser(user:any) {
        localStorage.setItem(this.userKey, JSON.stringify(user));
    }

    getMe() {
        return this.http.get('/rest/api/user/me', this.jwt()).map(
            (response: Response) => response.json()
        );
    }

    getAll() {
        return this.http.get('/rest/api/user/', this.jwt()).map(
            (response: Response) => response.json()
        );
    }

    getById(id: number) {
        return this.http.get('/rest/api/user/' + id, this.jwt()).map(
            (response: Response) => response.json()
        );
    }

    create(user: User) {
        return this.http.post('/rest/api/user', user, this.jwt()).map(
            (response: Response) => response.json()
        );
    }

    update(user: User) {
        return this.http.put('/rest/api/user/' + user.id, user, this.jwt()).map(
            (response: Response) => response.json()
        );
    }

    delete(id: number) {
        return this.http.delete('/rest/api/user/' + id, this.jwt()).map(
            (response: Response) => response.json()
        );
    }

    // private helper methods
    private jwt() {
        // create authorization header with jwt token
        let token = this.authService.retrieveToken();
        if (token) {
            let headers = new Headers({
                "Content-Type": "application/json",
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + token.access_token
            });
            return new RequestOptions({ headers: headers });
        }
        return new RequestOptions();
    }
}