import React from "react";
import { NavLink } from "react-router";
import {
  LayoutDashboard,
  Users,
  UserPlus,
  Settings,
  LogOut,
} from "lucide-react";

const Navbar = () => {
  const linkClass =
    "flex items-center gap-3 px-4 py-2 rounded-lg text-sm font-medium transition";

  const activeClass = "bg-gray-200 text-blue-700";
  const inactiveClass = "text-gray-600 hover:bg-gray-100";

  return (
    <aside className="h-screen w-62 bg-white border-r flex flex-col justify-between">
      
      {/* Top Section */}
      <div>
        {/* Logo */}
        <div className="flex items-center gap-3 px-6 py-5">
          <div className="w-10 h-10 bg-blue-700 rounded-xl flex items-center justify-center text-white font-bold">
            ⌁
          </div>
          <div>
            <h1 className="text-sm font-semibold text-gray-800">
              Precision ERP
            </h1>
            <p className="text-xs text-gray-400 leading-tight">
              ARCHITECTURAL <br /> INTELLIGENCE
            </p>
          </div>
        </div>

        {/* Nav Links */}
        <nav className="mt-4 flex flex-col gap-2 px-3">
          
          <NavLink
            to="/dashboard"
            end
            className={({ isActive }) =>
              `${linkClass} ${isActive ? activeClass : inactiveClass}`
            }
          >
            <LayoutDashboard size={18} />
            Dashboard
          </NavLink>

          <NavLink
            to="/dashboard/employee"
            className={({ isActive }) =>
              `${linkClass} ${isActive ? activeClass : inactiveClass}`
            }
          >
            <Users size={18} />
            Employees
          </NavLink>

          <NavLink
            to="/dashboard/registration"
            className={({ isActive }) =>
              `${linkClass} ${isActive ? activeClass : inactiveClass}`
            }
          >
            <UserPlus size={18} />
            Registration
          </NavLink>



        </nav>
      </div>

      {/* Bottom User */}
      <div className="px-4 py-4 border-t flex items-center justify-between gap-3">
       <div className="flex items-center gap-2">
         <img
          src="https://i.pravatar.cc/40"
          alt="user"
          className="w-10 h-10 rounded-full"
        />
        <div>
          <p className="text-sm font-medium text-gray-800">
            Marcus Thorne
          </p>
          <p className="text-xs text-gray-500">
            Lead Architect
          </p>
        </div>
       </div>
       <div>
        <button className="hover:bg-red-400 cursor-pointer transition duration-300 active:scale-90 hover:text-white p-2 rounded-sm  " >
            <LogOut/>
        </button>
       </div>
      </div>
    </aside>
  );
};

export default Navbar;