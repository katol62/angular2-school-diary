import { Injectable } from '@angular/core';
import { Http, Headers, Response, Request, RequestOptions, RequestOptionsArgs, RequestMethod, URLSearchParams } from '@angular/http';
import { User, Account } from '../index';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

    constructor(private http: Http) {}

    login(username: string, password: string) {

        let prodRest = 'http://staging.schoolarlife.ru:3003/rest/api/login/';
        let testTest = '/rest/api/login/';
        //change
        let host = location.hostname;
        let restUrl = host == 'localhost' ? testTest : prodRest;

        let params = {login: username, password: password};
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(restUrl, params, options)
            .map(this.handleLogin)
            .catch(this.handleLoginError);
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }

    isLoggedIn() {

        if (localStorage.getItem('currentUser')) {
            let auth:any = JSON.parse(localStorage.getItem('currentUser'));
            return (auth.user && auth.user.username !== null);
        }
        return false;
    }

    //service
    private handleLogin(response: Response) {
        let auth = response.json();
        if (auth && auth.token) {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify(auth));
        }
        return auth;
    }

    private handleLoginError (error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }


}
