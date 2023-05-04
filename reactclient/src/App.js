import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Patient } from './pages/patient/Patient';
import PharmacistList from "./pages/pharmacist/PharmacistList";
import { Pharmacist } from "./pages/pharmacist/Pharmacist";
import { Physician } from "./pages/physician/Physician";


function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <div>Home</div>,
    },
    {
      path: '/pharmacist',
      element: <Pharmacist />,
    },
    {
      path: '/physician',
      element: <Physician />,
    },
    {
      path: '/patient',
      element: <Patient />,
      children: [
        {
          path: 'pharmacists', // Corrected path
          element: <PharmacistList />, // Updated display text
        },
        {
          path: 'physicians', // Corrected path
          element: <div>List Physician</div>, // Updated display text
        }  
      ],
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
        <div className="h-20 bg-blue-600">
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
          <RouterProvider router={router} />
        </div>
      </div>
    </>
  );
}

export default App;
