import React, { useState } from "react";

const PatientTabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="flex flex-row p-5 w-screen">
      <div className="border-b border-gray-200 flex flex-col">
        {/* Mapping over tabs array */}
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`${
              activeTab === index
                ? "border-indigo-500 text-indigo-600"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:border-indigo-500 focus:text-indigo-600"
            } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Rendering current selected tab content */}
      <div className="border-solid border-1 border-blue-500 mt-4 ml-20 w-screen">
      {tabs[activeTab].content}
      </div>
      
    </div>
  );
};

export default PatientTabs;
