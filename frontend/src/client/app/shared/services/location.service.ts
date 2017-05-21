import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import {AuthService} from "../auth/Auth.service";
import {GlobalSettings} from "../data/global-settings";
import {Address, Country, City} from "../models/user";

@Injectable()
export class LocationService {

    private tokenKey:string = GlobalSettings.STORAGE_TOKEN;
    private userKey:string = GlobalSettings.STORAGE_USER;

    private BASE_PATH:string = '/rest/api/location/';

    constructor(private http: Http, private authService:AuthService) { }

    getAllAddresses() {
        return this.http.get(this.BASE_PATH+'address', this.jwt()).map(
            (response: Response) => response.json()
        );
    }

    getAllCountries() {
        return this.http.get(this.BASE_PATH+'country', this.jwt()).map(
            (response: Response) => response.json()
        );
    }

    getAllCities() {
        return this.http.get(this.BASE_PATH+'city', this.jwt()).map(
            (response: Response) => response.json()
        );
    }

    getAddress(id: number) {
        return this.http.get(this.BASE_PATH+'address/' + id, this.jwt()).map(
            (response: Response) => response.json()
        );
    }

    getCountry(id: number) {
        return this.http.get(this.BASE_PATH+'country/' + id, this.jwt()).map(
            (response: Response) => response.json()
        );
    }

    getCity(id: number) {
        return this.http.get(this.BASE_PATH+'city/' + id, this.jwt()).map(
            (response: Response) => response.json()
        );
    }

    createAddress(address: Address) {
        return this.http.post(this.BASE_PATH+'address', address, this.jwt()).map(
            (response: Response) => response.json()
        );
    }

    createCountry(country: Country) {
        return this.http.post(this.BASE_PATH+'country', country, this.jwt()).map(
            (response: Response) => response.json()
        );
    }

    createCity(city: City) {
        return this.http.post(this.BASE_PATH+'city', city, this.jwt()).map(
            (response: Response) => response.json()
        );
    }

    updateAddress(address: Address) {
        return this.http.put(this.BASE_PATH+'address/' + address.id, address, this.jwt()).map(
            (response: Response) => response.json()
        );
    }

    updateCountry(country: Country) {
        return this.http.put(this.BASE_PATH+'country/' + country.id, country, this.jwt()).map(
            (response: Response) => response.json()
        );
    }

    updateCity(city: City) {
        return this.http.put(this.BASE_PATH+'city/' + city.id, city, this.jwt()).map(
            (response: Response) => response.json()
        );
    }

    deleteAddress(id: number) {
        return this.http.delete(this.BASE_PATH+'address/' + id, this.jwt()).map(
            (response: Response) => response.json()
        );
    }

    deleteCountry(id: number) {
        return this.http.delete(this.BASE_PATH+'country/' + id, this.jwt()).map(
            (response: Response) => response.json()
        );
    }

    deleteCity(id: number) {
        return this.http.delete(this.BASE_PATH+'city/' + id, this.jwt()).map(
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