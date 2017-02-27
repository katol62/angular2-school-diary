import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { User } from '../index';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
    AdminUser:User;
    PlainUser:User;

    constructor(private http: Http) {
        this.AdminUser = new User('admin', 'admin', 'admin');
        this.PlainUser = new User('user', 'user', 'user');
    }

    // login(username: string, password: string) {
    //     return this.http.post('/api/authenticate', JSON.stringify({ username: username, password: password }))
    //         .map((response: Response) => {
    //             // login successful if there's a jwt token in the response
    //             let user = response.json();
    //             if (user && user.token) {
    //                 // store user details and jwt token in local storage to keep user logged in between page refreshes
    //                 localStorage.setItem('currentUser', JSON.stringify(user));
    //             }
    //         });
    // }

    login(username: string, password: string) {

        debugger;
        let user:User = new User();

        if (username === this.AdminUser.username && password === this.AdminUser.password) {
            localStorage.setItem('currentUser', JSON.stringify(this.AdminUser));
            user = this.AdminUser;
        }
        if (username === this.PlainUser.username && password === this.PlainUser.password) {
            localStorage.setItem('currentUser', JSON.stringify(this.PlainUser));
            user = this.PlainUser;
        }

        return user;
    }


    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }

    isLoggedIn() {

        if (localStorage.getItem('currentUser')) {
            let user:User = JSON.parse(localStorage.getItem('currentUser'));
            return (user.username !== null);
        }
        return false;
    }


}
