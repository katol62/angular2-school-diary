export class GlobalSettings {

    // public static ROLE_ADMIN = 'admin';
    // public static ROLE_CHIEF = 'chief';
    // public static ROLE_TEACHER = 'teacher';
    // public static ROLE_PARENT = 'parent';

    public static ROLE_GLOGAL_ADMIN = 0;
    public static ROLE_LOCAL_ADMIN = 1;
    public static ROLE_PRINCIPAL = 2;
    public static ROLE_TEACHER = 3;
    public static ROLE_PARENT = 4;
    public static ROLE_STUDENT = 5;

    public static ROLES:any = {
        0: 'Администратор',
        1: 'Локальный админитистратор',
        2: 'Директор',
        3: 'Учитель',
        4: 'Родитель',
        5: 'Ученик'
    };

    //routes
    public static ROUTE_HOME = 'home';
    public static ROUTE_ABOUT = 'about';
    public static ROUTE_CONTACTS = 'contacts';
    public static ROUTE_NETWORK = 'network';
    public static ROUTE_DASHBOARD = 'dashboard';

    public static ROUTE_NETWORK_NEWS = 'news';
    public static ROUTE_NETWORK_FEED = 'feed';
    public static ROUTE_NETWORK_EVENTS = 'events';
    public static ROUTE_NETWORK_FRIENDS = 'friends';

    public static ROUTE_DASHBOARD_ADMIN_SCHOOLS = 'schools';
    public static ROUTE_DASHBOARD_ADMIN_CONSUMERS = 'consumers';
    public static ROUTE_DASHBOARD_ADMIN_SYSTEM = 'system';
    public static ROUTE_DASHBOARD_ADMIN_REPORTS = 'reports';

    public static ROUTE_DASHBOARD_CHIEF_PROFILE = 'chief-profile';
    public static ROUTE_DASHBOARD_CHIEF_PLAN = 'plan';
    public static ROUTE_DASHBOARD_CHIEF_SCHEDULE = 'chief-schedule';
    public static ROUTE_DASHBOARD_CHIEF_COURSES = 'courses';
    public static ROUTE_DASHBOARD_CHIEF_TEACHERS = 'teachers';
    public static ROUTE_DASHBOARD_CHIEF_STUDENTS = 'students';
    public static ROUTE_DASHBOARD_CHIEF_PARENTS = 'parents';
    public static ROUTE_DASHBOARD_CHIEF_EVENTS = 'events';
    public static ROUTE_DASHBOARD_CHIEF_TASKS = 'tasks';
    public static ROUTE_DASHBOARD_CHIEF_MEALS = 'meals';

    public static ROUTE_DASHBOARD_TEACHER_PROFILE = 'teacher-profile';
    public static ROUTE_DASHBOARD_TEACHER_HOMETASK = 'teacher-hometask';
    public static ROUTE_DASHBOARD_TEACHER_SCHEDULE = 'teacher-schedule';
    public static ROUTE_DASHBOARD_TEACHER_SHEET = 'teacher-sheet';
    public static ROUTE_DASHBOARD_TEACHER_EVENTS = 'teacher-events';
    public static ROUTE_DASHBOARD_TEACHER_TASKS = 'teacher-tasks';

    public static ROUTE_DASHBOARD_PARENT_PROFILE = 'parent-profile';
    public static ROUTE_DASHBOARD_PARENT_SCHEDULE = 'parent-schedule';
    public static ROUTE_DASHBOARD_PARENT_HOMETASK = 'parent-hometask';
    public static ROUTE_DASHBOARD_PARENT_SHEET = 'parent-sheet';
    public static ROUTE_DASHBOARD_PARENT_EVENTS = 'parent-events';
    public static ROUTE_DASHBOARD_PARENT_TASKS = 'parent-tasks';

    //local storage data
    public static STORAGE_USER = 'currentUser';
    public static STORAGE_TOKEN = 'app_token';
    
}