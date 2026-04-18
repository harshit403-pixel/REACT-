import React from "react";
import { Plus, Search } from "lucide-react";
import BreadCrumbs from "../../../shared/components/BreadCrumbs";
import { useNavigates } from "../../../shared/hooks/useNavigates";
import { Outlet, useLocation } from "react-router";

const employees = [
  {
    name: "Julian Vance",
    email: "julian.v@precision.erp",
    role: "Principal Architect",
    dept: "Design & Concepts",
    status: "Active",
    joined: "Oct 12, 2021",
  },
  {
    name: "Elena Rodriguez",
    email: "e.rodriguez@precision.erp",
    role: "Structural Lead",
    dept: "Engineering",
    status: "Active",
    joined: "Jan 05, 2019",
  },
  {
    name: "Marcus Chen",
    email: "m.chen@precision.erp",
    role: "BIM Specialist",
    dept: "Tech Operations",
    status: "On Leave",
    joined: "Mar 22, 2022",
  },
  {
    name: "Sophia Larsson",
    email: "sophia.l@precision.erp",
    role: "Urban Planner",
    dept: "Urban Systems",
    status: "Active",
    joined: "Jul 18, 2020",
  },
];

const EmployeePage = () => {
  let {pathname} = useLocation()
  let {navigate} = useNavigates()
  console.log(pathname)
  return (
    <div className="flex-1 bg-gray-100  min-h-screen relative p-6">


      {
        pathname === "/dashboard/employee/profile" ?      <div className="absolute z-11 top-30 ">

        < Outlet />
      </div> : null
      }



  
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <BreadCrumbs/>
          <h1 className="text-2xl font-bold text-gray-800">
            Employee Management
          </h1>
          <p className="text-sm text-gray-500">
            Efficiently manage your workforce and resources
          </p>
        </div>

        <button className="flex items-center gap-2 bg-blue-700 text-white px-4 py-2 rounded-lg text-sm">
          <Plus size={16} />
          Register Employee
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-5 rounded-xl shadow-sm">
          <p className="text-sm text-gray-500">Total Staff</p>
          <h2 className="text-2xl font-bold">1,284</h2>
        </div>
        <div className="bg-white p-5 rounded-xl shadow-sm">
          <p className="text-sm text-gray-500">Active Projects</p>
          <h2 className="text-2xl font-bold">42</h2>
        </div>
        <div className="bg-white p-5 rounded-xl shadow-sm">
          <p className="text-sm text-gray-500">Retention Rate</p>
          <h2 className="text-2xl font-bold">98.2%</h2>
        </div>
      </div>

      {/* Filters */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex gap-3">
          <select className="bg-white px-4 py-2 rounded-lg shadow-sm text-sm">
            <option>All Departments</option>
          </select>

          <select className="bg-white px-4 py-2 rounded-lg shadow-sm text-sm">
            <option>Status: Any</option>
          </select>
        </div>

        <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg shadow-sm">
          <Search size={16} className="text-gray-400" />
          <input
            placeholder="Search..."
            className="outline-none text-sm"
          />
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        
        {/* Table Head */}
        <div className="grid grid-cols-6 text-sm font-medium text-gray-500 px-6 py-3 border-b">
          <span>Name & Identity</span>
          <span>Role</span>
          <span>Department</span>
          <span>Status</span>
          <span>Joined</span>
          <span>Actions</span>
        </div>

        {/* Rows */}
        {employees.map((emp, i) => (
          <div
            key={i}
            className="grid grid-cols-6 items-center px-6 py-4 border-b text-sm"
          >
            {/* Name */}
            <div>
              <p className="font-medium text-gray-800">{emp.name}</p>
              <p className="text-gray-500 text-xs">{emp.email}</p>
            </div>

            <span>{emp.role}</span>
            <span className="text-gray-600">{emp.dept}</span>

            {/* Status */}
            <span>
              <span
                className={`px-2 py-1 rounded-full text-xs ${
                  emp.status === "Active"
                    ? "bg-blue-100 text-blue-700"
                    : "bg-orange-100 text-orange-700"
                }`}
              >
                {emp.status}
              </span>
            </span>

            <span className="text-gray-600">{emp.joined}</span>

            <span
            onClick={()=> navigate("/dashboard/employee/profile")}
            className="text-blue-600 cursor-pointer text-sm">
              View
            </span>
          </div>
        ))}

        {/* Pagination */}
        <div className="flex justify-between items-center px-6 py-4 text-sm">
          <div className="flex gap-2">
            <button className="px-3 py-1 border rounded">1</button>
            <button className="px-3 py-1 border rounded">2</button>
            <button className="px-3 py-1 border rounded">3</button>
          </div>

          <div>
            Jump to page:
            <input
              className="ml-2 w-12 px-2 py-1 border rounded"
              defaultValue={1}
            />
          </div>
        </div>
      </div>
</div>


  );
};

export default EmployeePage;