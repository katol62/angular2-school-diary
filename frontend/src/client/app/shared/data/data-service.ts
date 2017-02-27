import { Injectable } from '@angular/core';
import { DataNews, DataEvent, DataFriend, DataFeed } from '../models/data/data-models';
import { NEWS, EVENTS, FRIENDS, FEED } from './test-data';


@Injectable()

export class DataService {

    getNews(): DataNews[] {
        return NEWS;
    }
    getEvents(): DataEvent[] {
        return EVENTS;
    }
    getFriends(): DataFriend[] {
        return FRIENDS;
    }
    getFeed(): DataFeed[] {
        return FEED;
    }

}
