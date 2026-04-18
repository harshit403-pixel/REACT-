import React, { useState } from "react";
import { useNavigate } from "react-router";
import BreadCrumbs from "../../../shared/components/BreadCrumbs";

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

const EmployeeProfile = () => {
   
  const [selected, setSelected] = useState(employees[0]);

  return (
    
 <div className="h-fit w-full bg-blue-50  rounded-xl flex flex-col gap-3" >
        <div className="pt-4 pl-6" >
            <BreadCrumbs />
        </div>
           <div className="h-fit w-full bg-blue-50 pr-6 pl-6 pb-6 rounded-xl flex gap-6">
        
      
      {/* Sidebar Employee List */}
      <div className="w-1/3 bg-white rounded-2xl shadow-md p-4">
        <h2 className="text-xl font-bold text-blue-700 mb-4">
          Employees
        </h2>

        {employees.map((emp, index) => (
          <div
            key={index}
            onClick={() => setSelected(emp)}
            className={`p-3 rounded-lg cursor-pointer mb-2 transition ${
              selected.email === emp.email
                ? "bg-blue-100"
                : "hover:bg-blue-50"
            }`}
          >
            <p className="font-semibold text-blue-800">{emp.name}</p>
            <p className="text-sm text-gray-500">{emp.role}</p>
          </div>
        ))}
      </div>

      {/* Profile Card */}
      <div className="w-2/3 bg-white rounded-2xl shadow-md p-6">
        
        {/* Header */}
        <div className="flex items-center gap-6 border-b pb-4">
          <div className="w-20 h-20 rounded-full bg-blue-500 text-white flex items-center justify-center text-xl font-bold">
            {selected.name.charAt(0)}
          </div>

          <div>
            <h2 className="text-2xl font-bold text-blue-700">
              {selected.name}
            </h2>
            <p className="text-gray-500">{selected.role}</p>

            <span
              className={`text-sm px-3 py-1 rounded-full ${
                selected.status === "Active"
                  ? "bg-green-500 text-white"
                  : "bg-yellow-500 text-white"
              }`}
            >
              {selected.status}
            </span>
          </div>
        </div>

        {/* Info */}
        <div className="grid grid-cols-2 gap-6 mt-6">
          <div>
            <h3 className="text-blue-600 font-semibold mb-2">
              Personal Info
            </h3>
            <p><b>Email:</b> {selected.email}</p>
            <p><b>Department:</b> {selected.dept}</p>
          </div>

          <div>
            <h3 className="text-blue-600 font-semibold mb-2">
              Work Info
            </h3>
            <p><b>Role:</b> {selected.role}</p>
            <p><b>Joined:</b> {selected.joined}</p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-4 mt-8">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            Edit Profile
          </button>

          <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50">
            Message
          </button>
        </div>

      </div>
    </div>
 </div>
  );
};

export default EmployeeProfile;