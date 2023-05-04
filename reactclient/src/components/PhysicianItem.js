import { UserCircleIcon } from "@heroicons/react/outline";
import axios from "axios";
import { MdAlternateEmail } from "react-icons/md";
import { SERVER_URL } from "../utils";
import { toast } from "react-toastify";

const PhysicianItem = ({ item: { name, age, gender, hasAccess, email } }) => {
  const authorize = email => {
    axios.post(`${SERVER_URL}/patient/authorize/physician`, {email})
      .then(response => {
        console.log(response.data);
       toast(response.data.data)
      })
      .catch(error => {
        console.error(error.message);
      });
  }

  return (
    <div className="bg-white rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl flex flex-col justify-around">
      <div>
        {/* Name section */}
        <div className="flex items-start mb-2 text-gray-600">
          <UserCircleIcon className="mr-2 h-5 w-5 mt-1" />
          <h4 className="text-lg font-medium">{name}</h4>
        </div>

        {/* Age section */}
        <div className="flex items-center text-gray-500">
          <span className="text-sm font-medium mr-2">Age:</span>
          <span>{age}</span>
        </div>

        {/* Gender section */}
        <div className="flex items-center text-gray-500">
          <span className="text-sm font-medium mr-2">Gender:</span>
          <span>{gender}</span>
        </div>
      </div>

      <div>
        {/* Access section */}
        <div className="flex items-center mb-2">
          <svg
            viewBox="0 0 20 20"
            fill="currentColor"
            className={`${hasAccess ? "text-green-500" : "text-red-500"
              } h-5 w-5 mr-2`}
          >
            <path
              fillRule="evenodd"
              d="M14.707 7.293a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L9 11.586l4.293-4.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
          <span className={`${hasAccess ? "text-green-500" : "text-red-500"}`}>
            {hasAccess ? "Access Granted" : "Access Denied"}
          </span>
        </div>

        {/* Phone section */}
        <div className="flex items-center text-gray-500">
          <MdAlternateEmail className="mr-2 h-5 w-5" />
          <span>{email}</span>
        </div>
      </div>
      {!hasAccess ? (
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-10"
          onClick={() => authorize(email)}>
          Authorize
        </button>

      ) : null}

    </div>
  );
};

export default PhysicianItem;