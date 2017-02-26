import {BaseModel} from "../base-model";

export class DataNews extends BaseModel {
    public title:string;
    public text:string;
    public logoUrl:string;
    public limit:number;
    public showMore:boolean;
}

export class DataEvent extends BaseModel {
    public title:string;
    public text:string;
    public logoUrl:string;
    public thumbUrl:string;
    public limit:number;
    public showMore:boolean;
}

export class DataFriend extends BaseModel {
    public firstName:string;
    public lastName:string;
    public avatarUrl:string;
}

export class DataFeed extends BaseModel {
    public author:string;
    public avatarUrl:string;
    public feedText:string;
}

export class Mode {
    public id:number;
    public title:string;
    public mode:string;
    public icon:string;
}

