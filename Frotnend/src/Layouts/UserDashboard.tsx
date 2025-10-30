import { Outlet } from "react-router";
import UserSidebar from "../Dashboards/UserDashboard/Components/UserSidebar/UserSidebar";

export default function UserDashboard() {
    return (
        <div className="flex min-h-screen">
            {/* Sidebar */}
            <UserSidebar />

            {/* Main content */}
            <div className="flex-1 bg-gray-100 p-6">
                <Outlet />
            </div>
        </div>
    )
}
