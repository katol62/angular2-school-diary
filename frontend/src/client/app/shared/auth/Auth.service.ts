import { Injectable } from '@angular/core';
import { Http, Headers, Response, Request, RequestOptions, RequestOptionsArgs, RequestMethod, URLSearchParams } from '@angular/http';
import { User, Account } from '../index';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

    users:User[] = [
        // {username: 'admin', password: 'admin', type: 'admin', firstName: 'Админ', lastName: 'Иванов'},
        // {username: 'teacher', password: 'teacher', type: 'teacher', firstName: 'Учитель', lastName: 'Иванов'},
        // {username: 'chief', password: 'chief', type: 'chief', firstName: 'Директор', lastName: 'Иванов'},
        // {username: 'parent', password: 'parent', type: 'parent', firstName: 'Родитель', lastName: 'Иванов'}
    ];

    constructor(private http: Http) {
    }

    login(username: string, password: string) {

        let params: URLSearchParams = new URLSearchParams();
        params.set('login', username);
        params.set('password', password);

        return this.http.get('http://localhost:3003/rest/api/login/', {search: params})
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let user = response.json();
                if (user) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }
            });
    }

    // login(username: string, password: string) {
    //
    //     return new Promise((resolve, reject) => {
    //         localStorage.removeItem('currentUser');
    //
    //         let retUser = null;
    //
    //         this.users.forEach((user:User) => {
    //             if (user.username === username && user.password === user.password) {
    //                 localStorage.setItem('currentUser', JSON.stringify(user));
    //                 retUser = user;
    //             }
    //         });
    //         if (retUser) {
    //             resolve(retUser);
    //         } else {
    //             reject(retUser);
    //         }
    //     });
    //
    // }

    //temporary

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
