import React from "react";

const RegistrationPage = () => {
  return (
    <div className="flex-1 bg-gray-100 min-h-screen p-6">
      
      {/* Header */}
      <div className="mb-6">
        <p className="text-sm text-blue-600 cursor-pointer mb-2">
          ← Back to Directory
        </p>

        <h1 className="text-2xl font-bold text-gray-800">
          Register New Employee
        </h1>

        <p className="text-sm text-gray-500 mt-1 max-w-2xl">
          Create a comprehensive profile for a new team member. Ensure all mandatory
          information is captured for architectural intelligence synchronization.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-6">
        
        {/* LEFT SIDE */}
        <div className="col-span-2 flex flex-col gap-6">

          {/* Personal Info */}
          <div className="bg-white p-5 rounded-xl shadow-sm">
            <h2 className="font-semibold text-blue-700 mb-4">
              Personal Information
            </h2>

            <div className="flex flex-col gap-4">
              <input
                placeholder="Full Legal Name"
                className="bg-gray-100 p-3 rounded-lg outline-none"
              />

              <div className="grid grid-cols-2 gap-4">
                <input
                  placeholder="Email Address"
                  className="bg-gray-100 p-3 rounded-lg outline-none"
                />
                <input
                  placeholder="Phone Number"
                  className="bg-gray-100 p-3 rounded-lg outline-none"
                />
              </div>
            </div>
          </div>

          {/* Professional Info */}
          <div className="bg-white p-5 rounded-xl shadow-sm">
            <h2 className="font-semibold text-blue-700 mb-4">
              Professional Information
            </h2>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <input
                placeholder="Employee ID"
                className="bg-gray-100 p-3 rounded-lg outline-none"
              />

              <select className="bg-gray-100 p-3 rounded-lg outline-none">
                <option>Department</option>
                <option>Architectural Design</option>
                <option>Engineering</option>
              </select>
            </div>

            <select className="bg-gray-100 p-3 rounded-lg w-full outline-none">
              <option>Professional Role</option>
              <option>Senior Architect</option>
              <option>Junior Architect</option>
            </select>
          </div>

          {/* Account Setup */}
          <div className="bg-white p-5 rounded-xl shadow-sm">
            <h2 className="font-semibold text-blue-700 mb-4">
              Account Setup
            </h2>

            <div className="grid grid-cols-2 gap-4">
              <select className="bg-gray-100 p-3 rounded-lg outline-none">
                <option>Access Level</option>
                <option>Standard Employee</option>
                <option>Admin</option>
              </select>

              <select className="bg-gray-100 p-3 rounded-lg outline-none">
                <option>Initial Password Strategy</option>
                <option>System Generated (Email)</option>
                <option>Manual</option>
              </select>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="flex justify-between items-center bg-white p-4 rounded-xl shadow-sm">
            <p className="text-xs text-gray-500">
              Fields marked with an asterisk are mandatory.
            </p>

            <div className="flex gap-4">
              <button className="text-gray-600">Cancel</button>
              <button className="bg-blue-700 text-white px-5 py-2 rounded-lg">
                Register Employee
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col gap-6">

          {/* Profile Preview */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="bg-blue-700 h-20"></div>

            <div className="p-5 text-center">
              <div className="w-16 h-16 mx-auto bg-gray-200 rounded-xl flex items-center justify-center -mt-10">
                📷
              </div>

              <h3 className="mt-3 font-semibold text-gray-800">
                Profile Preview
              </h3>

              <p className="text-sm text-gray-500 mt-1">
                Upload a professional photo for identification.
              </p>

              <button className="mt-3 bg-gray-200 px-4 py-2 rounded-lg text-sm">
                Upload Photo
              </button>
            </div>
          </div>

          {/* Status */}
          <div className="bg-white p-5 rounded-xl shadow-sm">
            <h3 className="text-sm font-semibold text-blue-700 mb-3">
              Registration Status
            </h3>

            <ul className="text-sm text-gray-600 space-y-2">
              <li>✔ Identity Validation</li>
              <li>✔ Corporate Directory Slot</li>
              <li className="text-gray-400">○ Permission Mapping</li>
            </ul>
          </div>

          {/* Tip */}
          <div className="bg-orange-100 p-5 rounded-xl">
            <p className="text-sm font-semibold text-orange-700 mb-1">
              PRO TIP
            </p>
            <p className="text-sm text-orange-700">
              Assigning a clear role helps automate resource allocation.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;