import React, { useState } from 'react'
import { Register } from './Register'
import { Login } from './Login'
import Dashboard from './Dashboard';

const tabs = [
    { id: 1, name: "Register" },
    { id: 2, name: " Login" },
    { id: 3, name: " Dashboard" }

];


export const Patient = (props) => {
    const [activeTab, setActiveTab] = useState(tabs[0].id);
    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };

    if (1 == 1) {
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

                {activeTab === 1 && <Register />}
                {activeTab === 2 && <Login />}
                {activeTab === 3 && <Dashboard />}
            </div>
        )
    }
}
