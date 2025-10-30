import { createBrowserRouter } from "react-router";
import App from "../App";
import UserDashboard from "../Layouts/UserDashboard";
import HotelLayout from "../Layouts/HotelLayout";
import AdminLayout from "../Layouts/AdminLayout";
import Users from "../Dashboards/Admin/pages/Users";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "dashboard",
        element: <UserDashboard />,
    },
    {
        path: "hotel/dashboard",
        element: <HotelLayout />,
    },
    {
        path: "admin/dashboard",
        element: <AdminLayout />,
        children: [
            {
                path: 'users',
                element: <Users />
            }
        ]
    },
]);

export default router;