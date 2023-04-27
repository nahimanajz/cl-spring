import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Patient } from './pages/patient/Patient';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <div>Home</div>,
    },
    {
      path: "/pharmacist",
      element: <div>Pharmacist</div>,
    },
    {
      path: "/physician",
      element: <div>Physician</div>,
    },
    {
      path: "/patient",
      element: <Patient />,
      children:[
        {
      
          path:"/pharmacists", 
          element:<div> pharmacists</div>
        },
        {
          path:"physician", 
          element:<div> Physician</div>
        }
        
      ]
    },
    /** Replace with pharmacy routes */
    {
      path: "/test",
      element: <div> test...</div>,
    },

    {
      path: "***",
      element: <div>NOT Found</div>,
    },
  ]);
  
  const navs = [["Home", "/"], ["Pharmacist", "/pharmacist"], ["Physician", "/physician"], ["Patient", "/patient"]];

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored" />
      <div className="flex flex-col h-screen">
        <div className="h-20 bg-blue-400">
          <div className='text-sm font-medium text-gray-900 mb-4"'>Online Pharmacy</div>
          <div>
            <nav className="flex sm:justify-center space-x-4 mb-4">
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
        </div>
        <div className="flex-1">
          {/* <RouterProvider router={router} /> */}
        </div>
      </div>
    </>
  );
}

export default App;
