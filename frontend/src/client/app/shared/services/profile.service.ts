import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { User, Profile } from '../models/index';
import {AuthService} from "../auth/Auth.service";
import {GlobalSettings} from "../data/global-settings";

@Injectable()
export class ProfileService {

    private tokenKey:string = GlobalSettings.STORAGE_TOKEN;
    private userKey:string = GlobalSettings.STORAGE_USER;

    constructor(private http: Http, private authService:AuthService) { }

    getAll() {
        return this.http.get('/rest/api/profile/', this.jwt()).map(
            (response: Response) => response.json()
        );
    }

    getById(id: number) {
        return this.http.get('/rest/api/profile/' + id, this.jwt()).map(
            (response: Response) => response.json()
        );
    }

    getByUserId(id: number) {
        return this.http.get('/rest/api/profile/user/' + id, this.jwt()).map(
            (response: Response) => response.json()
        );
    }

    create(user: Profile) {
        return this.http.post('/rest/api/profile/', user, this.jwt()).map(
            (response: Response) => response.json()
        );
    }

    update(user: Profile) {
        return this.http.put('/rest/api/profile/' + user.id, user, this.jwt()).map(
            (response: Response) => response.json()
        );
    }

    delete(id: number) {
        return this.http.delete('/rest/api/profile/' + id, this.jwt()).map(
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