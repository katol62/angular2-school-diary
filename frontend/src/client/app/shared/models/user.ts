import { BaseModel } from './base-model';

export class User extends BaseModel{
    public name: string = null;
    public email:string = null;
    public password: string = null;
    public passwordConfirm:string = null;
    public primeRole:number = -1;
    public roles:any[] = [];
    public active:boolean = false;
}

export class Country extends BaseModel {
    public name:string = '';
}

export class City extends BaseModel {
    public name:string = '';
}

export class Address extends BaseModel {
    public zip:string = null;
    public country:Country = null;
    public city:City = null;
    public addressLine:string = null;
    public comment:string = null;
}

export class Profile extends BaseModel{
    public userId:number = -1;
    public firstName:string = '';
    public middleName:string = '';
    public lastName:string = '';
    public logoImage: string = null;
    public gender:number = -1;
    public birthDate:string = '';
    public age:number = null;
    public email:string = null;
    public address:Address = null;
}
