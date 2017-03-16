import { BaseModel } from './base-model';

export class User extends BaseModel{
    public id: number = null;
    public username: string = null;
    public password: string = null;
    public type:string = null;
    public firstName:string = null;
    public lastName:string = null
}
