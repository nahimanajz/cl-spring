import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
      element: <div>Patient</div>,
    },

    {
      path: "**",
      element: <div>NOT Found</div>,
    },
  ]);
  const navs = [["Home", "/"], ["Pharmacist", "/pharmacist"],["Physician", "/physician"],["Patient", "/patient"] ];

  return (
    <>
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={true} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="colored" />
      <div>
        <div>
          <div>Logo</div>
          <div><nav className="flex sm:justify-center space-x-4">
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
        <div>
          <RouterProvider router={router} />
        </div>
      </div>
    </>
  );
}

export default App;
