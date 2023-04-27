import React from 'react';

function Dashboard(props) {
    const navs = [["Pharmacists", "/pharmacist"], ["Physicians", "/physician"]];

    return (
        <>
            <ToastContainer position="top-right" autoClose={5000} hideProgressBar={true} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="colored" />
            <div className="flex h-screen">
                <div className="w-1/5 bg-blue-600 text-white text-center font-extrabold flex-2">
                    Productivity Tracker
                </div>
                <div className="w-4/5 flex justify-center">
                    <div className="flex flex-col">
                        <div className="h-1/6">
                            <nav className="flex sm:justify-center space-x-4">
                                {navs.map(([title, url]) => (
                                    <a
                                        key={title}
                                        href={url}
                                        className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900"
                                    >
                                        {title}
                                    </a>
                                ))}
                            </nav>

                        </div>
                        <div className=" px-10 py-2">
                            {/* TODO: Patient code goes here */}
                            {/* <RouterProvider router={router} /> */}
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}

export default Dashboard;