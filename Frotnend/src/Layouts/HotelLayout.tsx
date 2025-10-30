import { Outlet } from "react-router";
import HotelSidebar from "../Dashboards/Agent/Components/HotelManagerSidebar/HotelSidebar";

export default function HotelLayout() {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <HotelSidebar />

      {/* Main content */}
      <div className="flex-1 bg-gray-100 p-6">
        <Outlet />
      </div>
    </div>
  )
}
