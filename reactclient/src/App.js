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
        }
      ],
    },
  ]);

  const navs = [["Pharmacist", "/"], ["Physician", "/physician"], ["Patient", "/patient"]];

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
      <div className="flex flex-col min-h-min bg-blend-color-dodge">
        <div className="h-20 bg-blue-500">
          <h2 className='text-sm font-medium text-yellow-50 mb-4"'>Online Pharmacy</h2>

          <nav className="flex sm:justify-center space-x-4 mb-4 ease-in duration-300">
            {navs.map(([title, url]) => (
              <a
                key={title}
                href={url}
                className="rounded-lg px-3 py-2 text-yellow-50 font-medium hover:bg-slate-100 hover:text-slate-900"
              >
                {title}
              </a>
            ))}
          </nav>

        </div>
        <div className="flex-1">
          <RouterProvider router={router} />
        </div>


      </div>
      <div className="fixed inset-x-0 bottom-0 h-48">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#0099ff" fill-opacity="1" d="M0,32L720,0L1440,128L1440,320L720,320L0,320Z"></path>
        </svg>
      </div>

    </>
  );
}

export default App;
