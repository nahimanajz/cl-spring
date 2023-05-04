import React, { useState } from 'react';
import { SERVER_URL } from '../../utils';
import { toast } from 'react-toastify';
import axios from 'axios';

function Dashboard() {
    const [consultation, setConsultation] = useState("");
    const email = localStorage.getItem("email");

    const handleSubmit = async (event) => {
        event.preventDefault();
        await axios
            .post(`${SERVER_URL}/physician/consult/${consultation}`, {email})
            .then((response) => toast(response.data))
            .catch((error) => console.log(error));
    };

    return (
        <div className="w-full max-w-sm mx-auto">
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="consultation">
                        Consultation
                    </label>
                    <textarea
                        name="consultation"
                        id="consultation"
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        rows="5"
                        required
                        value={consultation}
                        onChange={(event) => setConsultation(event.target.value)}
                    ></textarea>
                </div>
                <div className="flex items-center justify-between">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Dashboard;