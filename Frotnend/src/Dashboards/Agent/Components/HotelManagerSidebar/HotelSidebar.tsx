import { NavLink } from "react-router";

export default function HotelSidebar() {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `block px-4 py-2 rounded mb-2 hover:bg-gray-700 ${
      isActive ? "bg-gray-800 text-white" : "text-gray-300"
    }`;

  return (
    <div className="w-56 h-screen bg-gray-900 p-5 flex flex-col">
      <h2 className="text-white text-2xl font-bold mb-6">Admin Panel</h2>
      <nav className="flex flex-col">
        <NavLink to="/admin/dashboard" className={linkClass}>
          Dashboard
        </NavLink>
        <NavLink to="/admin/dashboard/users" className={linkClass}>
          Users
        </NavLink>
        <NavLink to="/admin/settings" className={linkClass}>
          Settings
        </NavLink>
      </nav>
    </div>
  );
}
