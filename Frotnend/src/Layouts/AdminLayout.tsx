import { Outlet } from "react-router";
import AdminSidebar from "../Dashboards/Admin/Components/AdminSidebar/AdminSidebar";

export default function AdminLayout() {
    return (
        <div className="flex min-h-screen">
            {/* Sidebar */}
            <AdminSidebar />

            {/* Main content */}
            <div className="flex-1 bg-gray-100 p-6">
                <Outlet />
            </div>
        </div>
    );
}
