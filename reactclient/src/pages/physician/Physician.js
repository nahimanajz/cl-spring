import { useState } from "react";
import Dashboard from "./Dashboard";
import { Login } from "./Login";
import { Register } from "./Register";

export const tabs = [
    { id: 1, name: "Register" },
    { id: 2, name: " Login" }
];


export const Physician = () => {
    const [activeTab, setActiveTab] = useState(tabs[0].id);
    const [showDashboard, setShowDashboard] = useState(false)
    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };

    if (showDashboard) {
        return <Dashboard />
    } else {
        return (
            <div className="w-full max-w-screen-lg mx-auto">
                <div className="flex border-b border-gray-200 m-5">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => handleTabClick(tab.id)}
                            className={`${activeTab === tab.id
                                ? "border-blue-500 text-blue-600"
                                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                                } flex-1 border-b-2 py-4 px-6 text-lg font-medium`}
                        >
                            {tab.name}
                        </button>
                    ))}
                </div>

                {activeTab === 1 && <Register activateLogin={handleTabClick} />}
                {activeTab === 2 && <Login showDashboard={setShowDashboard} />}

            </div>
        )
    }
}