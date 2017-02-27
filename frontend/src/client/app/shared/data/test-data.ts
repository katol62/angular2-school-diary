import { DataNews, DataEvent, DataFriend, DataFeed, Mode } from "../models/data/data-models";

export const NEWS: DataNews[] = [
    {
        id: 1,
        logoUrl: 'http://placehold.it/70',
        title: 'Новость 1',
        text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sagittis hendrerit finibus. Nullam sed est urna. Suspendisse potenti. Nunc dapibus sagittis sapien sit amet varius. Proin tincidunt enim commodo, convallis elit ac, luctus arcu. Duis efficitur auctor est. Cras eu faucibus ante, sit amet dapibus quam. Quisque a lectus nec risus porttitor posuere ut id mauris. Pellentesque bibendum accumsan libero, et facilisis erat tristique sit amet. Sed tellus dui, accumsan vel ligula at, accumsan vestibulum elit.',
        limit:120, showMore: true
    },
    {
        id: 2,
        logoUrl: 'http://placehold.it/70',
        title: 'Новость 2',
        text:'Donec a lectus eros. Duis posuere elit venenatis scelerisque tristique. Ut libero odio, faucibus vitae erat et, semper feugiat dui. Etiam in tempus mauris, a fringilla quam. Vivamus quam augue, tincidunt sit amet lectus in, venenatis ultrices dolor. Sed vel nunc congue, semper ipsum at, egestas massa. Cras mauris sem, lacinia eget vehicula ac, blandit id massa.',
        limit:120,
        showMore: true
    },
    {
        id: 3,
        logoUrl: 'http://placehold.it/70',
        title: 'Новость 3',
        text:'Nulla ut nisl eu lacus maximus pretium. Pellentesque egestas lacus felis, ac mattis massa ullamcorper quis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Curabitur sed purus gravida, porta est in, placerat dui. Nullam semper maximus leo ac scelerisque. Duis eget fermentum erat. In a massa non quam vestibulum hendrerit at eu lacus. Vivamus ornare nulla ut orci blandit hendrerit. Curabitur nibh risus, placerat vitae tincidunt non, lobortis et orci. Praesent laoreet at eros in blandit. Aenean convallis magna id auctor posuere. Phasellus commodo pretium urna eu accumsan.',
        limit:120,
        showMore: true
    },
    {
        id: 4,
        logoUrl: 'http://placehold.it/70',
        title: 'Новость 4',
        text:'Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus interdum blandit arcu. Integer ultricies ante accumsan justo elementum ultricies. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur pellentesque eget ligula non fermentum. Sed lacinia quam et libero rutrum faucibus. Praesent ullamcorper dui eget felis vulputate, a malesuada arcu porta. Integer ac enim eros. Cras non dui metus. Etiam rutrum congue magna, sit amet rutrum sapien egestas in. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas eget tortor dui. Aliquam ac pharetra mauris, a aliquam felis. Morbi aliquam porttitor tortor in dapibus.',
        limit:120,
        showMore: true
    },
    {
        id: 5,
        logoUrl: 'http://placehold.it/70',
        title: 'Новость 5',
        text:'Cras vehicula est vel rhoncus lobortis. In pulvinar eleifend lacus non semper. Praesent pharetra sed est sit amet volutpat. Etiam ut lorem risus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis sollicitudin, lectus vitae pellentesque imperdiet, orci nulla dictum ipsum, ac congue odio sapien vestibulum arcu. Aenean non mauris consequat, euismod est sed, imperdiet velit. Sed egestas porta mi, quis consectetur ante varius at. Integer ullamcorper porta dui a convallis. Vestibulum vitae condimentum augue, vel porttitor erat. Duis tincidunt urna non elementum viverra. Aliquam suscipit pharetra pretium. Sed vel risus risus. Praesent eleifend convallis egestas.',
        limit:120,
        showMore: true
    }
];

export const EVENTS: DataEvent[] = [
    {
        id: 1,
        logoUrl: 'http://placehold.it/350x150',
        thumbUrl: 'http://placehold.it/70',
        title: 'Событие 1',
        text:'Событие Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sagittis hendrerit finibus. Nullam sed est urna. Suspendisse potenti. Nunc dapibus sagittis sapien sit amet varius. Proin tincidunt enim commodo, convallis elit ac, luctus arcu. Duis efficitur auctor est. Cras eu faucibus ante, sit amet dapibus quam. Quisque a lectus nec risus porttitor posuere ut id mauris. Pellentesque bibendum accumsan libero, et facilisis erat tristique sit amet. Sed tellus dui, accumsan vel ligula at, accumsan vestibulum elit.',
        limit:120,
        showMore: true
    },
    {
        id: 2,
        logoUrl: 'http://placehold.it/350x150',
        thumbUrl: 'http://placehold.it/70', title: 'Событие 2',
        text:'Событие Donec a lectus eros. Duis posuere elit venenatis scelerisque tristique. Ut libero odio, faucibus vitae erat et, semper feugiat dui. Etiam in tempus mauris, a fringilla quam. Vivamus quam augue, tincidunt sit amet lectus in, venenatis ultrices dolor. Sed vel nunc congue, semper ipsum at, egestas massa. Cras mauris sem, lacinia eget vehicula ac, blandit id massa.',
        limit:120,
        showMore: true
    },
    {
        id: 3,
        logoUrl: 'http://placehold.it/350x150',
        thumbUrl: 'http://placehold.it/70', title: 'Событие 3',
        text:'Событие Nulla ut nisl eu lacus maximus pretium. Pellentesque egestas lacus felis, ac mattis massa ullamcorper quis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Curabitur sed purus gravida, porta est in, placerat dui. Nullam semper maximus leo ac scelerisque. Duis eget fermentum erat. In a massa non quam vestibulum hendrerit at eu lacus. Vivamus ornare nulla ut orci blandit hendrerit. Curabitur nibh risus, placerat vitae tincidunt non, lobortis et orci. Praesent laoreet at eros in blandit. Aenean convallis magna id auctor posuere. Phasellus commodo pretium urna eu accumsan.',
        limit:120,
        showMore: true
    },
    {
        id: 4,
        logoUrl: 'http://placehold.it/350x150',
        thumbUrl: 'http://placehold.it/70',
        title: 'Событие 4',
        text:'Событие Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus interdum blandit arcu. Integer ultricies ante accumsan justo elementum ultricies. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur pellentesque eget ligula non fermentum. Sed lacinia quam et libero rutrum faucibus. Praesent ullamcorper dui eget felis vulputate, a malesuada arcu porta. Integer ac enim eros. Cras non dui metus. Etiam rutrum congue magna, sit amet rutrum sapien egestas in. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas eget tortor dui. Aliquam ac pharetra mauris, a aliquam felis. Morbi aliquam porttitor tortor in dapibus.',
        limit:120,
        showMore: true
    },
    {
        id: 5,
        logoUrl: 'http://placehold.it/350x150',
        thumbUrl: 'http://placehold.it/70',
        title: 'Событие 5',
        text:'Событие Cras vehicula est vel rhoncus lobortis. In pulvinar eleifend lacus non semper. Praesent pharetra sed est sit amet volutpat. Etiam ut lorem risus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis sollicitudin, lectus vitae pellentesque imperdiet, orci nulla dictum ipsum, ac congue odio sapien vestibulum arcu. Aenean non mauris consequat, euismod est sed, imperdiet velit. Sed egestas porta mi, quis consectetur ante varius at. Integer ullamcorper porta dui a convallis. Vestibulum vitae condimentum augue, vel porttitor erat. Duis tincidunt urna non elementum viverra. Aliquam suscipit pharetra pretium. Sed vel risus risus. Praesent eleifend convallis egestas.',
        limit:120,
        showMore: true
    },
];

export const FRIENDS: DataFriend[] = [
    {
        id: 1,
        avatarUrl: 'http://placehold.it/50',
        firstName: 'First1',
        lastName: 'Last1'
    },
    {
        id: 2,
        avatarUrl: 'http://placehold.it/50',
        firstName: 'First2',
        lastName: 'Last2'
    },
    {
        id: 3,
        avatarUrl: 'http://placehold.it/50',
        firstName: 'First3',
        lastName: 'Last3'
    },
    {
        id: 4,
        avatarUrl: 'http://placehold.it/50',
        firstName: 'First4',
        lastName: 'Last4'
    },
    {
        id: 5,
        avatarUrl: 'http://placehold.it/50',
        firstName: 'First5',
        lastName: 'Last5'
    },
    {
        id: 6,
        avatarUrl: 'http://placehold.it/50',
        firstName: 'First6',
        lastName: 'Last6'
    },
    {
        id: 7,
        avatarUrl: 'http://placehold.it/50',
        firstName: 'First7',
        lastName: 'Last7'
    },
    {
        id: 8,
        avatarUrl: 'http://placehold.it/50',
        firstName: 'First8',
        lastName: 'Last8'
    },
    {
        id: 9,
        avatarUrl: 'http://placehold.it/50',
        firstName: 'First9',
        lastName: 'Last9'
    },
    {
        id: 10,
        avatarUrl: 'http://placehold.it/50',
        firstName: 'First10',
        lastName: 'Last10'
    }
];

export const FEED: DataFeed[] = [
    {
        id: 1,
        avatarUrl: 'http://placehold.it/70',
        author: 'Name1',
        feedText: '11Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sagittis hendrerit finibus. Nullam sed est urna. Suspendisse potenti.'
    },
    {
        id: 2,
        avatarUrl: 'http://placehold.it/70',
        author: 'Name2',
        feedText: '22Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sagittis hendrerit finibus. Nullam sed est urna. Suspendisse potenti.'
    },
    {
        id: 3,
        avatarUrl: 'http://placehold.it/70',
        author: 'Name3',
        feedText: '33Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sagittis hendrerit finibus. Nullam sed est urna. Suspendisse potenti.'
    },
    {
        id: 4,
        avatarUrl: 'http://placehold.it/70',
        author: 'Name4',
        feedText: '44Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sagittis hendrerit finibus. Nullam sed est urna. Suspendisse potenti.'
    },
    {
        id: 5,
        avatarUrl: 'http://placehold.it/70',
        author: 'Name5',
        feedText: '55Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sagittis hendrerit finibus. Nullam sed est urna. Suspendisse potenti.'
    },
    {
        id: 6,
        avatarUrl: 'http://placehold.it/70',
        author: 'Name6',
        feedText: '66Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sagittis hendrerit finibus. Nullam sed est urna. Suspendisse potenti.'
    },
    {
        id: 7,
        avatarUrl: 'http://placehold.it/70',
        author: 'Name7',
        feedText: '77Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sagittis hendrerit finibus. Nullam sed est urna. Suspendisse potenti.'
    },
    {
        id: 8,
        avatarUrl: 'http://placehold.it/70',
        author: 'Name8',
        feedText: '77Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sagittis hendrerit finibus. Nullam sed est urna. Suspendisse potenti.'
    },
    {
        id: 9,
        avatarUrl: 'http://placehold.it/70',
        author: 'Name9',
        feedText: '88Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sagittis hendrerit finibus. Nullam sed est urna. Suspendisse potenti.'
    },
    {
        id: 10,
        avatarUrl: 'http://placehold.it/70',
        author: 'Name10',
        feedText: '1010Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sagittis hendrerit finibus. Nullam sed est urna. Suspendisse potenti.'
    },
    {
        id: 11,
        avatarUrl: 'http://placehold.it/70',
        author: 'Name11',
        feedText: '1111Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sagittis hendrerit finibus. Nullam sed est urna. Suspendisse potenti.'
    },
    {
        id: 12,
        avatarUrl: 'http://placehold.it/70',
        author: 'Name12',
        feedText: '1212Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sagittis hendrerit finibus. Nullam sed est urna. Suspendisse potenti.'
    },
    {
        id: 13,
        avatarUrl: 'http://placehold.it/70',
        author: 'Name13',
        feedText: '1313Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sagittis hendrerit finibus. Nullam sed est urna. Suspendisse potenti.'
    },
    {
        id: 14,
        avatarUrl: 'http://placehold.it/70',
        author: 'Name14',
        feedText: '1414Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sagittis hendrerit finibus. Nullam sed est urna. Suspendisse potenti.'
    },
    {
        id: 15,
        avatarUrl: 'http://placehold.it/70',
        author: 'Name15',
        feedText: '1515Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sagittis hendrerit finibus. Nullam sed est urna. Suspendisse potenti.'
    }
];

export const MODES: Mode[] = [
    {
        id: 1,
        title: 'Новости',
        mode: 'news',
        icon: 'fa-file-text'
    },
    {
        id: 2,
        title: 'Сообщения',
        mode: 'feed',
        icon: 'fa-commenting'
    },
    {
        id: 3,
        title: 'События',
        mode: 'events',
        icon: 'fa-calendar'
    },
    {
        id: 4,
        title: 'Друзья',
        mode: 'friends',
        icon: 'fa-users'
    }
];


