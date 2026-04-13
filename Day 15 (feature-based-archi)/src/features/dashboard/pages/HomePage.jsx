import React from "react";
import {
  Bell,
  Search,
  HelpCircle,
  Download,
} from "lucide-react";

const HomePage = () => {
  return (
    <div className="flex-1 bg-gray-100 min-h-screen p-6">

      {/* Top Bar */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-xl font-semibold text-gray-800">
          Employee Management
        </h1>

        <div className="flex items-center gap-4">
          {/* Search */}
          <div className="flex items-center bg-white px-3 py-2 rounded-lg shadow-sm w-80">
            <Search size={16} className="text-gray-400" />
            <input
              type="text"
              placeholder="Search across systems..."
              className="ml-2 outline-none text-sm w-full"
            />
          </div>

          <Bell className="text-gray-600 cursor-pointer" size={18} />
          <HelpCircle className="text-gray-600 cursor-pointer" size={18} />

          <img
            src="https://i.pravatar.cc/40"
            className="w-9 h-9 rounded-full"
            alt="user"
          />
        </div>
      </div>

      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            Systems Overview
          </h2>
          <p className="text-sm text-gray-500">
            Status as of Oct 24, 2023 | 09:42 AM
          </p>
        </div>

        <button className="flex items-center gap-2 bg-blue-700 text-white px-4 py-2 rounded-lg text-sm">
          <Download size={16} />
          Export Report
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-5 rounded-xl shadow-sm">
          <p className="text-xs text-gray-500 uppercase">Total Employees</p>
          <h3 className="text-2xl font-bold mt-2">1,482</h3>
        </div>

        <div className="bg-white p-5 rounded-xl shadow-sm">
          <p className="text-xs text-gray-500 uppercase">Active Departments</p>
          <h3 className="text-2xl font-bold mt-2">24</h3>
        </div>

        <div className="bg-white p-5 rounded-xl shadow-sm">
          <p className="text-xs text-gray-500 uppercase">New Hires MTD</p>
          <h3 className="text-2xl font-bold mt-2">38</h3>
        </div>

        <div className="bg-blue-900 text-white p-5 rounded-xl shadow-sm">
          <p className="text-xs uppercase opacity-80">Retention Rate</p>
          <h3 className="text-2xl font-bold mt-2">96.4%</h3>
        </div>
      </div>

      {/* Middle Section */}
      <div className="grid grid-cols-3 gap-6">
        
        {/* Left */}
        <div className="col-span-2 flex flex-col gap-6">
          
          {/* Command Center */}
          <div className="bg-white p-5 rounded-xl shadow-sm">
            <h3 className="text-sm font-semibold text-gray-700 mb-4">
              COMMAND CENTER
            </h3>

            <div className="grid grid-cols-4 gap-4">
              {["New Staff", "Log Leave", "Payroll Run", "Analytics"].map(
                (item, i) => (
                  <div
                    key={i}
                    className="bg-gray-100 p-4 rounded-lg text-center text-sm font-medium cursor-pointer hover:bg-gray-200"
                  >
                    {item}
                  </div>
                )
              )}
            </div>
          </div>

          {/* Recent Intelligence */}
          <div className="bg-white p-5 rounded-xl shadow-sm">
            <div className="flex justify-between mb-4">
              <h3 className="font-semibold text-gray-800">
                Recent Intelligence
              </h3>
              <span className="text-sm text-blue-600 cursor-pointer">
                View Historical Log
              </span>
            </div>

            <div className="space-y-4 text-sm">
              <div>
                <p className="font-medium">
                  Contract Executed: Sarah Jenkins
                </p>
                <p className="text-gray-500">
                  HR Department finalized senior UI Designer role.
                </p>
              </div>

              <div>
                <p className="font-medium">
                  Department Realignment
                </p>
                <p className="text-gray-500">
                  Architecture merged under Global Engineering.
                </p>
              </div>

              <div>
                <p className="font-medium">
                  Security Audit Complete
                </p>
                <p className="text-gray-500">
                  Monthly access review completed successfully.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="flex flex-col gap-6">
          
          {/* Event Card */}
          <div className="bg-white p-5 rounded-xl shadow-sm">
            <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
              Upcoming Event
            </span>
            <h3 className="mt-3 font-semibold">
              Quarterly Review Cycle
            </h3>
            <p className="text-sm text-gray-500 mt-1">
              Focus on growth metrics and output.
            </p>
          </div>

          {/* Performance */}
          <div className="bg-white p-5 rounded-xl shadow-sm">
            <h3 className="font-semibold mb-3">
              Sync Performance
            </h3>

            <div className="mb-3">
              <p className="text-sm text-gray-500">
                Mainframe Latency
              </p>
              <div className="w-full bg-gray-200 h-2 rounded mt-1">
                <div className="bg-blue-700 h-2 w-1/4 rounded"></div>
              </div>
            </div>

            <div>
              <p className="text-sm text-gray-500">
                API Integrity
              </p>
              <div className="w-full bg-gray-200 h-2 rounded mt-1">
                <div className="bg-blue-700 h-2 w-[95%] rounded"></div>
              </div>
            </div>
          </div>

          {/* Weather */}
          <div className="bg-blue-900 text-white p-5 rounded-xl shadow-sm">
            <p className="text-xs opacity-80">OFFICE CONDITIONS</p>
            <h3 className="text-xl font-bold mt-2">
              22°C Clear
            </h3>
            <p className="text-sm opacity-80">
              Optimal for focus
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;