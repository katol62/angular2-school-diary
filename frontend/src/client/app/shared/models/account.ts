import { BaseModel } from './base-model';

export class Account extends BaseModel {
    public login:string;
    public password:string;
    public type:string;
}

export class Token {
    public access_token:string;
    public expires_in:string;
    public refresh_token: string;
    public scope:string;
    public token_type:string;
}