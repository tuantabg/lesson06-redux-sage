import AdminHomePage from "../containers/AdminHomePage";
import TaskBoard from "../containers/TaskBoard";

export const API_ENDPOINT = "http://localhost:3000";

export const STATUSES = [
    {
        value: 0,
        label: "READY"
    },
    {
        value: 1,
        label: "IN PROGRESS"
    },
    {
        value: 2,
        label: "COMPLETED"
    }
];

export const STATUS_CODE = {
    SUCCESS: 200,
    CREATED: 201,
    UPDATED: 202,
};

export const ADMIN_ROUTER = [
    {
        path: "/",
        name: "Trang quản trị",
        icon: "home_circle",
        exact: true,
        component: () => <AdminHomePage />
    },
    {
        path: "/task-board",
        name: "Quản lý công việc",
        icon: "list_circle",
        component: () => <TaskBoard />
    },
];