import { Injectable } from '@angular/core';
import { Http, Headers, Response, Request, RequestOptions, RequestOptionsArgs, RequestMethod, URLSearchParams } from '@angular/http';
import { User, Account } from '../index';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {GlobalEventsManager} from "../events/global-events.manager";
import {GlobalSettings} from "../data/global-settings";

@Injectable()
export class AuthService {

    private tokenKey:string = GlobalSettings.STORAGE_TOKEN;
    private userKey:string = GlobalSettings.STORAGE_USER;
    private ttl:number = 1000; //3 hours

    constructor(private http: Http, private globalEventsManager:GlobalEventsManager) {}

    login(username: string, password: string) {
        let restUrl = this.getAuthUrl();
        let headers = new Headers({
            "Content-Type": "application/x-www-form-urlencoded",
            "Accept": "application/json",
            "Authorization": "Basic " + btoa("gigy" + ':' + "secret")
        });
        let options = new RequestOptions({ headers: headers});
        let data = "grant_type=password&username="+username+"&password="+password;

        return this.http.post(restUrl, data, options)
            .map(this.handleLogin)
            .catch(this.handleLoginError);
    }

    refresh() {
        if (this.retrieveToken()) {

            let tokenObj = this.retrieveToken();
            let refreshToken = tokenObj.token.refresh_token;

            let restUrl = this.getAuthUrl();
            let headers = new Headers({
                "Content-Type": "application/x-www-form-urlencoded",
                "Accept": "application/json",
                "Authorization": "Basic " + btoa("gigy" + ':' + "secret")
            });
            let options = new RequestOptions({ headers: headers});
            let data = 'grant_type=refresh_token&refresh_token=' + refreshToken;

            return this.http.post(restUrl, data, options)
                .map(this.handleLogin)
                .catch(this.handleLoginError);
        } else {
            return null;
        }
    }

    logout() {
        localStorage.removeItem(this.tokenKey);
        localStorage.removeItem(this.userKey);
        this.globalEventsManager.isLoggedIn(false);
    }

    isLoggedIn() {
        return this.retrieveToken() !== null;
    }

    //storing token
    public updateToken(token:any) {
        let expireTime:number = (new Date()).getTime() + token.expires_in*1000;
        this.store({ttl: expireTime, token: token});
    }

    private store(content:Object) {
        this.globalEventsManager.isLoggedIn(true);
        localStorage.setItem(this.tokenKey, JSON.stringify(content));
    }

    private retrieve() {
        let storedToken:string = localStorage.getItem(this.tokenKey);
        if(!storedToken) throw 'no token found';
        return storedToken;
    }

    public retrieveToken() {

        let currentTime:number = (new Date()).getTime(), token = null;
        try {
            let storedToken = JSON.parse(this.retrieve());
            if(storedToken.ttl < currentTime) throw 'invalid token found';
            token = storedToken.token;
        }
        catch(err) {
            console.log(err);
        }
        return token;

    }

    //service
    private handleLogin(response: Response) {
        let auth = response.json();
        return auth;
    }

    private handleLoginError (error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.log(errMsg);
        return Observable.throw(errMsg);
    }

    //service
    getAuthUrl() {
        let prodRest = 'http://staging.schoolarlife.ru:3003/rest/api/auth/login/';
        //let testTest = '/rest/api/auth/login/';
        let testTest = 'http://localhost:3003/rest/oauth/token';
        let host = location.hostname;
        let restUrl = host == 'localhost' ? testTest : prodRest;
        return restUrl;
    }

}
