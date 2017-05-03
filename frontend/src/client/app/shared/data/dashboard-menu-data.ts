import {GlobalSettings} from './global-settings';

export const DashboardMenu: any = {
    'all': [
        {id: GlobalSettings.ROUTE_DASHBOARD_ADMIN_SCHOOLS, title: 'Учебные заведения', icon: 'fa fa-user fa-lg', role: GlobalSettings.ROLE_GLOGAL_ADMIN},
        {id: GlobalSettings.ROUTE_DASHBOARD_ADMIN_CONSUMERS, title: 'Пользователи', icon: 'fa fa-user fa-lg', role: GlobalSettings.ROLE_GLOGAL_ADMIN},
        {id: GlobalSettings.ROUTE_DASHBOARD_ADMIN_SYSTEM, title: 'Состояние системы', icon: 'fa fa-user fa-lg', role: GlobalSettings.ROLE_GLOGAL_ADMIN},
        {id: GlobalSettings.ROUTE_DASHBOARD_ADMIN_REPORTS, title: 'Отчетность', icon: 'fa fa-user fa-lg', role: GlobalSettings.ROLE_GLOGAL_ADMIN},

        {id: GlobalSettings.ROUTE_DASHBOARD_CHIEF_PROFILE, title: 'Профайл', icon: 'fa fa-user fa-lg', role: GlobalSettings.ROLE_PRINCIPAL},
        {id: GlobalSettings.ROUTE_DASHBOARD_CHIEF_PLAN, title: 'Учебный план', icon: 'fa fa-user fa-lg', role: GlobalSettings.ROLE_PRINCIPAL},
        {id: GlobalSettings.ROUTE_DASHBOARD_CHIEF_SCHEDULE, title: 'Расписание', icon: 'fa fa-user fa-lg', role: GlobalSettings.ROLE_PRINCIPAL},
        {id: GlobalSettings.ROUTE_DASHBOARD_CHIEF_COURSES, title: 'Предметы и темы', icon: 'fa fa-user fa-lg', role: GlobalSettings.ROLE_PRINCIPAL},
        {id: GlobalSettings.ROUTE_DASHBOARD_CHIEF_TEACHERS, title: 'Учители', icon: 'fa fa-user fa-lg', role: GlobalSettings.ROLE_PRINCIPAL},
        {id: GlobalSettings.ROUTE_DASHBOARD_CHIEF_STUDENTS, title: 'Ученики', icon: 'fa fa-user fa-lg', role: GlobalSettings.ROLE_PRINCIPAL},
        {id: GlobalSettings.ROUTE_DASHBOARD_CHIEF_PARENTS, title: 'Родители', icon: 'fa fa-user fa-lg', role: GlobalSettings.ROLE_PRINCIPAL},
        {id: GlobalSettings.ROUTE_DASHBOARD_CHIEF_EVENTS, title: 'События', icon: 'fa fa-user fa-lg', role: GlobalSettings.ROLE_PRINCIPAL},
        {id: GlobalSettings.ROUTE_DASHBOARD_CHIEF_TASKS, title: 'Задачи', icon: 'fa fa-user fa-lg', role: GlobalSettings.ROLE_PRINCIPAL},
        {id: GlobalSettings.ROUTE_DASHBOARD_CHIEF_MEALS, title: 'Меню питания', icon: 'fa fa-user fa-lg', role: GlobalSettings.ROLE_PRINCIPAL},

        {id: GlobalSettings.ROUTE_DASHBOARD_TEACHER_PROFILE, title: 'Профайл', icon: 'fa fa-user fa-lg', role: GlobalSettings.ROLE_TEACHER},
        {id: GlobalSettings.ROUTE_DASHBOARD_TEACHER_HOMETASK, title: 'Домашнее задание', icon: 'fa fa-user fa-lg', role: GlobalSettings.ROLE_TEACHER},
        {id: GlobalSettings.ROUTE_DASHBOARD_TEACHER_SCHEDULE, title: 'Расписание', icon: 'fa fa-user fa-lg', role: GlobalSettings.ROLE_TEACHER},
        {id: GlobalSettings.ROUTE_DASHBOARD_TEACHER_SHEET, title: 'Ведомость', icon: 'fa fa-user fa-lg', role: GlobalSettings.ROLE_TEACHER},
        {id: GlobalSettings.ROUTE_DASHBOARD_TEACHER_EVENTS, title: 'События', icon: 'fa fa-user fa-lg', role: GlobalSettings.ROLE_TEACHER},
        {id: GlobalSettings.ROUTE_DASHBOARD_TEACHER_TASKS, title: 'Задачи', icon: 'fa fa-user fa-lg', role: GlobalSettings.ROLE_TEACHER},

        {id: GlobalSettings.ROUTE_DASHBOARD_PARENT_PROFILE, title: 'Профайл', icon: 'fa fa-user fa-lg', role: GlobalSettings.ROLE_PARENT},
        {id: GlobalSettings.ROUTE_DASHBOARD_PARENT_SCHEDULE, title: 'Расписание', icon: 'fa fa-user fa-lg', role: GlobalSettings.ROLE_PARENT,
            elms: [
                {id: 'child1', title: 'Расписание', icon: 'fa fa-user fa-lg'},
                {id: 'child2', title: 'Расписание', icon: 'fa fa-user fa-lg'}
            ]
        },
        {id: GlobalSettings.ROUTE_DASHBOARD_PARENT_HOMETASK, title: 'Домашнее задание', icon: 'fa fa-user fa-lg', role: GlobalSettings.ROLE_PARENT},
        {id: GlobalSettings.ROUTE_DASHBOARD_PARENT_SHEET, title: 'Ведомость', icon: 'fa fa-user fa-lg', role: GlobalSettings.ROLE_PARENT},
        {id: GlobalSettings.ROUTE_DASHBOARD_PARENT_EVENTS, title: 'События', icon: 'fa fa-user fa-lg', role: GlobalSettings.ROLE_PARENT},
        {id: GlobalSettings.ROUTE_DASHBOARD_PARENT_TASKS, title: 'Задачи', icon: 'fa fa-user fa-lg', role: GlobalSettings.ROLE_PARENT}

    ]

};

export const DashboardSchools: any[] = [
    {id: '1', title: 'Школа 1', flag: true, details: 'Школа 1 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, optio corporis quae nulla aspernatur in alias at numquam'},
    {id: '2', title: 'Школа 2', flag: true, details: 'Школа 2 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, optio corporis quae nulla aspernatur in alias at numquam'},
    {id: '3', title: 'Школа 3', flag: true, details: 'Школа 3 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, optio corporis quae nulla aspernatur in alias at numquam'},
    {id: '4', title: 'Школа 4', flag: true, details: 'Школа 4 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, optio corporis quae nulla aspernatur in alias at numquam'},
    {id: '5', title: 'Школа 5', flag: true, details: 'Школа 5 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, optio corporis quae nulla aspernatur in alias at numquam'},
    {id: '6', title: 'Школа 6', flag: false, details: 'Школа 6 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, optio corporis quae nulla aspernatur in alias at numquam'},
    {id: '7', title: 'Школа 7', flag: true, details: 'Школа 7 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, optio corporis quae nulla aspernatur in alias at numquam'},
    {id: '8', title: 'Школа 8', flag: true, details: 'Школа 8 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, optio corporis quae nulla aspernatur in alias at numquam'},
    {id: '9', title: 'Школа 9', flag: true, details: 'Школа 9 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, optio corporis quae nulla aspernatur in alias at numquam'},
    {id: '10', title: 'Школа 10', flag: false, details: 'Школа 10 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, optio corporis quae nulla aspernatur in alias at numquam'},
    {id: '11', title: 'Школа 11', flag: true, details: 'Школа 11 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, optio corporis quae nulla aspernatur in alias at numquam'},
    {id: '12', title: 'Школа 12', flag: true, details: 'Школа 12 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, optio corporis quae nulla aspernatur in alias at numquam'},
    {id: '13', title: 'Школа 13', flag: true, details: 'Школа 13 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, optio corporis quae nulla aspernatur in alias at numquam'},
    {id: '14', title: 'Школа 14', flag: true, details: 'Школа 14 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, optio corporis quae nulla aspernatur in alias at numquam'},
    {id: '15', title: 'Школа 15', flag: false, details: 'Школа 15 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, optio corporis quae nulla aspernatur in alias at numquam'},
    {id: '16', title: 'Школа 16', flag: true, details: 'Школа 16 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, optio corporis quae nulla aspernatur in alias at numquam'},
    {id: '17', title: 'Школа 17', flag: false, details: 'Школа 17 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, optio corporis quae nulla aspernatur in alias at numquam'},
    {id: '18', title: 'Школа 18', flag: true, details: 'Школа 18 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, optio corporis quae nulla aspernatur in alias at numquam'},
    {id: '19', title: 'Школа 19', flag: true, details: 'Школа 19 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, optio corporis quae nulla aspernatur in alias at numquam'},
    {id: '20', title: 'Школа 20', flag: false, details: 'Школа 20 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, optio corporis quae nulla aspernatur in alias at numquam'},
    {id: '21', title: 'Школа 21', flag: true, details: 'Школа 21 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, optio corporis quae nulla aspernatur in alias at numquam'},
    {id: '22', title: 'Школа 22', flag: true, details: 'Школа 22 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, optio corporis quae nulla aspernatur in alias at numquam'},
    {id: '23', title: 'Школа 23', flag: true, details: 'Школа 23 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, optio corporis quae nulla aspernatur in alias at numquam'},
    {id: '24', title: 'Школа 24', flag: true, details: 'Школа 24 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, optio corporis quae nulla aspernatur in alias at numquam'},
    {id: '25', title: 'Школа 25', flag: true, details: 'Школа 25 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, optio corporis quae nulla aspernatur in alias at numquam'}
];

export const DashboardUsers: any[] = [
    {id: '1', firstName: 'Name', lastName: 'Last1', phone: '122333444', details: '1Lorem ipsum dolor sit amet, consectetur adipisicing elit.'},
    {id: '2', firstName: 'Name', lastName: 'Last2', phone: '222333444', details: '2Lorem ipsum dolor sit amet, consectetur adipisicing elit.'},
    {id: '3', firstName: 'Name', lastName: 'Last3', phone: '322333444', details: '3Lorem ipsum dolor sit amet, consectetur adipisicing elit.'},
    {id: '4', firstName: 'Name', lastName: 'Last4', phone: '422333444', details: '4Lorem ipsum dolor sit amet, consectetur adipisicing elit.'},
    {id: '5', firstName: 'Name', lastName: 'Last5', phone: '522333444', details: '5Lorem ipsum dolor sit amet, consectetur adipisicing elit.'},
    {id: '6', firstName: 'Name', lastName: 'Last6', phone: '622333444', details: '6Lorem ipsum dolor sit amet, consectetur adipisicing elit.'},
    {id: '7', firstName: 'Name', lastName: 'Last7', phone: '722333444', details: '7Lorem ipsum dolor sit amet, consectetur adipisicing elit.'},
    {id: '8', firstName: 'Name', lastName: 'Last8', phone: '822333444', details: '8Lorem ipsum dolor sit amet, consectetur adipisicing elit.'},
];
